Template.listPosts.helpers ({
	posts: function () {
		Posts.find().fetch();
		return Posts.find();
	}
});