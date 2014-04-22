Template.postEdit.helpers({
  post: function() {
    return Posts.findOne(Session.get('currentPostId'));
  }
});

Template.postEdit.events({
  'click .btnUpdate': function(e, t) {
    e.preventDefault();
    if (Meteor.userId() === this.owner) {
      var et = t.find("#title");
      var el = t.find("#link");
      var en = t.find("#tags");
      Meteor.call('updatePost', this._id, et.value, el.value, en.value, this.owner);
      Router.go('postView', {_id: this._id});
    }
    else {
      alert("Access Denied");
    }
  }
});