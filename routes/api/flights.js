const router = require('express').Router();
const flightsController = require('../../controllers/flightsControllers');
// var pageTitle = 'TravelBuddy';


// Matches with "/api/flights"
router.route('/')
  .get(flightsController.findAll)
  .post(flightsController.create);

// Matches with "/api/flights/:id"
router
  .route('/:id')
  .get(flightsController.findById)
  .put(flightsController.update)
  .delete(flightsController.remove);

module.exports = router;
