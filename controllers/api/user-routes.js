const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
//get /
router.get('/', async (req, res) => {
   try {
    await User.findAll({
         attributes: { exclude: ['password'] }
     })
         .then(dbUserData => res.json(dbUserData))
         .catch(err => {
             console.log(err);
             res.status(500).json(err);
         });
   } catch (err) {
        console.log(err);
        res.status(500).json(err);
   }
});
//get /:id
router.get('/:id', async (req, res) => {
    try {
        await User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Post,
                    attributes: ['id', 'title', 'content', 'created_at']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'created_at'],
                    include: {
                        model: Post,
                        attributes: ['title']
                    }
                }
            ]
        })
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// post /api/users
router.post('/', async (req, res) => {
    try {
       await User.create({
            username: req.body.username,
            password: req.body.password
        })
            .then(dbUserData => {
                req.session.save(() => {
                    req.session.user_id = dbUserData.id;
                    req.session.username = dbUserData.username;
                    req.session.loggedIn = true;
                    res.json(dbUserData);
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// post /login
router.post('/login', async (req, res) => {
   try {
     await User.findOne({
         where: {
             username: req.body.username
         }
     }).then(dbUserData => {
         if (!dbUserData) {
             res.status(400).json({ message: 'No user with that username! '});
             return;
         }
         const validPassword = dbUserData.checkPassword(req.body.password);
         if (!validPassword) {
             res.status(400).json({ message: 'Incorrect password!' });
             return;
         }
 
        
         req.session.save(() => {
             req.session.user_id = dbUserData.id;
             req.session.username = dbUserData.username;
             req.session.loggedIn = true;
             res.json({ user: dbUserData, message: 'You are now logged in!' });
         });
     });
   } catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
});


// post /logout
router.post('/logout', (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// put /:id
router.put('/:id', async (req, res) => {
    try {
       await User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
            .then(dbUserData => {
                if (!dbUserData[0]) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// destroy /:id
router.delete('/:id', async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//export time 
module.exports = router;