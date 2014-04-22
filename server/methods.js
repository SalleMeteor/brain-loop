Meteor.methods({
	insertPost: function (titleVal, linkVal, tagsVal, ownerId) {
    	Posts.insert({ title: titleVal, link: linkVal, tags: tagsVal, owner: ownerId});
    	return ("Inserted!");
  	},	
	removePost: function (postId) {
    	Posts.remove(postId);
    	return ("Removed!");
  	},
  	updatePost: function (postId, titleVal, linkVal, tagsVal, ownerId) {
    	Posts.update(postId, { title: titleVal, link: linkVal, tags: tagsVal, owner: ownerId});
    	return ("Updated!");
  	}
});