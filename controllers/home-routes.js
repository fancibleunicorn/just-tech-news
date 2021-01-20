// Contains all of the user-facing routes, such as the homepage and login page

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


// Main "root" home page
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count'],
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                incldue: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
       const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// login/signup page
router.get('/login', (req, res) => {
    res.render('login');
})
;
module.exports = router;