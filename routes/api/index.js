// File collects all of the API routes and packages them up with their prefixes

const router = require('express').Router();

const userRoutes =require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// replaces / with specified pathway
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;