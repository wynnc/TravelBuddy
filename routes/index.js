var express = require('express');
var router = express.Router();
var pageTitle = 'TravelBuddy';
var db = require('../models');

router.get('/tripDetails', function (req, res, next) {
  db.Trip.findAll({
    where: {
      userId: req.user.id
    }
  }).then(function (trips) {
    res.render('travelInfoForm.pug', {title: pageTitle, trips: trips});
  }).catch(function (err) {
    res.json(err);
  });
});

router.get('/allTrips', function (req, res, next) {
  db.Trip.findAll({
    where: {
      userId: req.user.id
    },
    include: [
      {
        model: db.Flight
      },
      {
        model: db.Lodging
      },
      {
        model: db.Transport
      }
    ]
  }).then(function (trips) {
    console.log(trips);
    db.Flight.findAll({
    }).then(function (flights) {
      db.Transport.findAll({}).then(function (transports) {
        db.Lodging.findAll({}).then(function (lodgings) {
          res.render('trips.pug', {title: pageTitle, trips: trips, flights: flights, transports: transports, lodgings: lodgings});
        });
      });
    }).catch(function (err) {
      res.json(err);
    });
  });
});


// // router.get('/updateTrip', function (req, res, next) {
// //   res.render('updateTrip.pug', {title: pageTitle});
// // });

router.get('/updateTrip/:id', function (req, res, next) {
  db.Trip.findByPk(req.params.id);
  res.render('updateTrip.pug', {title: pageTitle});
});

router.get('/api/lodgingForm', function (req, res, next) {
  res.render('lodgingInfo.pug', {title: pageTitle});
});

router.get('/flightForm', function (req, res, next) {
  res.render('flightInfo.pug', {title: pageTitle});
});

router.get('/transportForm', function (req, res, next) {
  res.render('transportInfo.pug', {title: pageTitle});
});

router.get('/tripDetails', function (req, res, next) {
  db.Trip.findAll({
    where: {
      userId: req.user.id
    }
  }).then(function (trips) {
    res.render('travelInfoForm.pug', {title: pageTitle, trips: trips});
  }).catch(function (err) {
    res.json(err);
  });
});

router.get('/allTrips', function (req, res, next) {
  db.Trip.findAll({
    where: {
      userId: req.user.id
    },
    include: [
      {
        model: db.Flight
      },
      {
        model: db.Lodging
      },
      {
        model: db.Transport
      }
    ]
  }).then(function (trips) {
    console.log(trips);
    db.Flight.findAll({
    }).then(function (flights) {
      db.Transport.findAll({}).then(function (transports) {
        db.Lodging.findAll({}).then(function (lodgings) {
          res.render('trips.pug', {title: pageTitle, trips: trips, flights: flights, transports: transports, lodgings: lodgings});
        });
      });
    }).catch(function (err) {
      res.json(err);
    });
  });
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'TravelBuddy' });
});

router.get('/updateUser', function (req, res, next) {
  res.render('userForm.pug', {title: pageTitle});
});

router.get('/comingSoon', function (req, res, next) {
  res.render('redirect.pug', {title: pageTitle});
});

router.get('/allForms', function (req, res, next) {
  res.render('allForms.pug', {title: pageTitle});
});

// module.exports = router;
const path = require('path');
const apiRoutes = require('./api'); // index.js
// API Routes
router.use('/api', apiRoutes);

// If no API routes are hit send home
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../views'));
});

module.exports = router;
