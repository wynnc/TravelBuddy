const router = require('express').Router();
const tripsController = require('../../controllers/tripsControllers');
// var trips = require('../../models/trip.js');
// Matches with "/api/trips"
router.route('/')
  .get(tripsController.findAll)
  .post(tripsController.create);

// Matches with "/api/trips/:id"
router
  .route('/:id')
  // .get(tripsController.findById, function (req, res) {
  //   trips.all(function (data) {
  //     var tripsObject = { trips: data };
  //     res.render('trips.pug', tripsObject);
  //   });
  // })
  // router.get("/burgers", function(req, res) {
  //   // express callback response by calling burger.selectAllBurger
  //   burger.all(function(data) {
  //     // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
  //     var hbsObject = { burgers: data };
  //     res.render("index", hbsObject);
  //   });
  // });
  .put(tripsController.update)
  .delete(tripsController.remove);

module.exports = router;
