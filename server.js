//declare variables 
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
require('dotenv').config();
const routes = require('./controllers/');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SECRET,
    cookie: { maxAge: 7200000 
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
//Using the good ole port listener link for being lazy!
sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT ||3001, () => console.log(`App listening at http://localhost:${PORT} 🚀`));
  });
