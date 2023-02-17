const { User } = require('../models');

const userData = [
  {
    username: 'theboss',
    password: 'password123'
},
{
    username: 'dog',
    password: 'password123'
},
{
    username: 'castle',
    password: 'password123'
},
{
    username: 'zerocool',
    password: 'password123'
},
{
    username: 'homie',
    password: 'password123'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;