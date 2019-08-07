var express = require('express');
var router = express.Router();

// /* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'TravelBuddy' });
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
