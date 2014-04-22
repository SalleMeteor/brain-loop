  Template.home.alertView = function () {
    return Session.equals("postInserted", "Yes");
  };

  Template.home.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });