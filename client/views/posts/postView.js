Template.postView.helpers({
  post: function() {
    return Posts.findOne(Session.get(currentPostId));
  },
  ownPost: function() {
    return this.userId == Meteor.userId();
  }
});

Template.postView.events({
  'click .btnRemove': function(e, t) {
    e.preventDefault();
    if (Meteor.userId() === this.owner) {
      if (confirm("Delete this post?")) {
        Meteor.call('removePost', this._id);
        Router.go('home');
      }
    }
    else {
      alert("Access Denied");
    }
  }
});