const router = require('express').Router();
const tripRoutes = require('./trips');
const flightRoutes = require('./flights.js');
const lodgingRoutes = require('./lodgings');
const transportRoutes = require('./transports');
const userRoutes = require('./users');

// Trip routes
router.use('/trips', tripRoutes);

// Flight routes
router.use('/flights', flightRoutes);

// Lodging routes
router.use('/lodgings', lodgingRoutes);

// Transport routes
router.use('/tranports', transportRoutes);

// User routes
router.use('/users', userRoutes);

module.exports = router;
