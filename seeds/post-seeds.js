const { Post } = require("../models");

const postData = [
	{
	  title: 'Give me da Cash!',
	  content:'Making the fight for the cash',
	  user_id: 1,
	},
	{
	  title: 'Please invest please we need the money',
	  content:'How much can you give me Jeff Bezos? A lot',
	  user_id: 2,
	},
	{
	  title: 'Minnie the Moucher',
	  content:'Hiddy hiddy hiddy hoe!',
	  user_id: 3,
	},
  ];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;