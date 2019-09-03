const router = require('express').Router();
const tripsController = require('../../controllers/tripsControllers');
var pageTitle = 'TravelBuddy';
var db = require('../models');
// const trip = require('../../models/trip');

// Matches with "/api/trips"
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

// router.get('/newTrip', function (req, res, next) {
//   res.render('tripForm.pug', {title: pageTitle});
// });

router.route('/')
  .get(tripsController.findAll)
  .post(tripsController.create);

// Matches with "/api/trips/:id"
router
  .route('/:id')
  .get(tripsController.findById)
  .put(tripsController.update)
  .delete(tripsController.remove);

module.exports = router;
