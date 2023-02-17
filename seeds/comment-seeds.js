const { Comment } = require('../models');

const commentData = [
  {
		comment_text: 'Straight out of low cash',
		user_id: 1,
		post_id: 1,
	  },
	  {
		comment_text: 'Life is cash',
		user_id: 2,
		post_id: 2,
	  },
	  {
		comment_text: 'HOmie dont play that',
		user_id: 3,
		post_id: 3,
	  },
	];


const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;