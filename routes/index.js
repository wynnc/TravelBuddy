var express = require('express');
var router = express.Router();
var pageTitle = 'TravelBuddy';
var db = require('../models');

// /* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'TravelBuddy' });
});

router.get('/updateUser', function (req, res, next) {
  res.render('userForm.pug', {title: pageTitle});
});

router.get('/newTrip', function (req, res, next) {
  res.render('tripForm.pug', {trips: db.Trip});
});

router.get('/tripDetails', function (req, res, next) {
  res.render('travelInfoForm.pug', {trips: db.Trip.tripName});
});

router.get('/allTrips', function (req, res, next) {
  res.render('trips.pug', {title: pageTitle});
});

// module.exports = router;
const path = require('path');
const apiRoutes = require('./api'); // index.js
// API Routes
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../views'));
});

module.exports = router;
