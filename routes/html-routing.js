var path = require('path');

module.exports = function (app) {
  app.get('/newtrip', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/formTrip.handlebars'));
  });
};
