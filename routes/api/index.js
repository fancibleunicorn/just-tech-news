// File collects all of the API routes and packages them up with their prefixes

const router = require('express').Router();

const userRoutes =require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;