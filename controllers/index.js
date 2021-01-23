// File that collects the endpoints and prefixes them with /api

const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

const dashboardRoutes = require('./dashboard-routes.js');

router.use('/dashboard', dashboardRoutes);

// sends back error if attempting to use a route that doesn't exist
router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;