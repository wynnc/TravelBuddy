module.exports = function (app) {
  app.get('/updateUser', function (req, res) {
    res.render('userForm.pug');
  });

  app.get('/newTrip', function (req, res) {
    res.render('tripForm.pug');
  });
};
