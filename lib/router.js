Router.map(function() {
  this.route('home', {
  	path: '/',
  	template: 'home',
  });
  this.route('postView', {
		path: '/posts/:_id',
		data: function() { return Posts.findOne(this.params._id); }
	});
	this.route('postEdit', {
		path: '/posts/edit/:_id',
		data: function() { return Posts.findOne(this.params._id); }
	});
  this.route('postAdd', {
  	path: '/postAdd',
    template: 'postAdd'
  });
  this.route('404', {
  	path: '*',
  	template: '404'
  });
});