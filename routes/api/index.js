// File collects all of the API routes and packages them up with their prefixes

const router = require('express').Router();

const userRoutes =require('./user-routes');
const postRoutes = require('./post-routes');

// replaces / with specified pathway
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;