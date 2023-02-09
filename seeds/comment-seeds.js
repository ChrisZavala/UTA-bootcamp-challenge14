const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I can't wait to finish this BootCamp and get a job",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Smoke em if you got then",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "There goes Superman high in the sky!",
    post_id: 4,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;