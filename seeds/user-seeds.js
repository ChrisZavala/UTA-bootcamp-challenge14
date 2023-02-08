const { User } = require('../models');

const userData = [
  {
    username: "Adrian",
    email: "aadonis@alure.com",
    password: "cat123"
  },
  {
    username: "Frappe",
    email: "frappejcat@yahoo.com",
    password: "Kingoftheworld123"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;