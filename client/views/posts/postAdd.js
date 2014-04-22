Template.postAdd.events({
	'click button': function (e, t) {
		e.preventDefault();
		if (Meteor.userId() === null) {
		  	alert('Access Denied - Sign In / Register');
		}
		else {
		    var et = t.find("#title");
		    var el = t.find("#link");
		    var en = t.find("#tags");
		    if ((et.value != "") && (el.value != "") && (en.value != "")) {
				Meteor.call('insertPost', et.value, el.value, en.value, Meteor.userId());
	      		alert("Inserted!");
	      		Router.go('home');
	      	}
	      	else {
	      		alert("Please fill in all fields")
	      	}
    	}
	}
});