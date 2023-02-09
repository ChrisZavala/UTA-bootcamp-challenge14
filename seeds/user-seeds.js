const { User } = require('../models');

const userData = [
  {
    username: "Chris",
    email: "chris@me.com",
    password: "word1234"
  },
  {
    username: "Chon",
    email: "chon@gmail.com",
    password: "god1234"
  },
  {
    username: "Frappe",
    email: "TheKingCat@gmail.com",
    password: "kingcat"
  },
  {
    username: "Janie",
    email: "Janiecat@gmail.com",
    password: "princess"
  },
  {
    username: "Letty",
    email: "Letty@yahoo.com",
    password: "dog123456"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;