// File that collects the endpoints and prefixes them with /api

const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// sends back error if attempting to use a route that doesn't exist
router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;