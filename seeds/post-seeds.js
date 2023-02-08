const { Post } = require("../models");

const postData = [
  {
    title: "To ORM or not to ORM?",
    post_text:
      "Do you have time to do your Project 2 with this challenge already due?",
    user_id: 1,
  },
  {
    title: "Password hashing is a must for most websites. ",
    post_text: "The only hackers that are cool are in the movies, like that dude in the 90's movie Hackers!",
    user_id: 1,
  },
  {
    title: "Unit Testing is for suckers",
    post_text:
      "Please do it before you company pays the price for lack of unit testing",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;