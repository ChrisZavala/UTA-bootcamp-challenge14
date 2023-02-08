const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I love working with Indeed. With all knowledge I learned in coding UTA coding boot camp",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "I love using async/await for all my functions",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Using DRY is for suckers! ;)",
    post_id: 4,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;