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
  db.Trip.findAll().then(function (trips) {
    var tripObject = trips[0].dataValues.tripName;
    res.render('tripForm.pug', {trips: tripObject});
  });
});

router.get('/tripDetails', function (req, res, next) {
  res.render('travelInfoForm.pug', {trips: trips[0].dataValues.tripName});
});

router.get('/allTrips', function (req, res, next) {
  db.Trip.findAll().then(function (trips) {
    console.log(trips[1]);
    // for (var i = 0; i < trips.length; i++) {
    //   var tripName = trips[i].dataValues.tripName;
    //   var startDate = trips[i].dataValues.startDate;
    //   var endDate = trips[i].dataValues.endDate;
    //   res.render('trips.pug', {tripName: tripName}, {startDate: startDate}, {endDate: endDate});
    // };
  });
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
