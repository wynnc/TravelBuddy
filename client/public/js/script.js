// // create new trip
// alert("hello");
// var userId

$(document).ready(function () {
//   var selectedTrip;
  $(document).on('click', '#tripForm', handleTripFormSubmit);

  $('#tripDetails').on('click', handleUpdateTripForm);

  function handleTripFormSubmit () {
    $('#submit').on('click', function (event) {
      event.preventDefault();

      var newTrip = {
        tripName: $('#firstName').val().trim(),
        startDate: $('#startDate').val().trim(),
        endDate: $('#endDate').val().trim(),
        userId: $('#user.id')
      };
      
      $.post('/api/trips', newTrip).then(function (res) {
        console.log(res);
      });
    });
  }

  // create flight/lodging/transport

  function handleUpdateTripForm () {

    var selectedTrip = $('.tripName').val();
    // console.log(selectedTrip);
    selectedTrip = parseInt(selectedTrip);
    var airline = $('input[name=airline]').val();
    console.log(airline);
    var newFlight = {
      airline: $('input[name=airline]').val(),
      flightConNum: $('input[name=flightConNum]').val(),
      dateStartFly: $('input[name=dateStartFly]').val(),
      dateEndFly: $('input[name=dateEndFly]').val(),
      flightTime: $('input[name=flightTime]').val(),
      cancelledFly: false,
      flightNotes: $('input[name=flightNotes]').val(),
      TripId: selectedTrip
    };

    var newLodge = {
      lodgingName: $('input[name=lodgingName]').val(),
      lodgingConNum: $('input[name=lodgingConNum]').val(),
      dateStartLodg: $('input[name=dateStartLodg]').val(),
      dateEndLodg: $('input[name=dateEndLodg]').val(),
      checkIn: $('input[name=checkIn]').val(),
      cancelledLodg: false,
      lodgingNotes: $('input[name=lodgingNotes]').val(),
      TripId: selectedTrip

    };

    var newTrans = {
      dealer: $('input[name=dealer]').val(),
      carConNum: $('input[name=carConNum]').val(),
      dateStartTran: $('input[name=dateStartTran]').val(),
      dateEndTran: $('input[name=dateEndTran]').val(),
      tranTime: $('input[name=tranTime]').val(),
      cancelledTran: false,
      transportNotes: $('input[name=transportNotes]').val(),
      TripId: selectedTrip
    };

    // console.log(newFlight);
    $.post('/api/flights', newFlight).then(function (response) {
      console.log(response);
    });

    // console.log(newLodge);
    $.post('/api/lodgings', newLodge).then(function (response) {
      console.log(response);
    });

    // console.log(newTrans);
    $.post('/api/transports', newTrans).then(function (response) {
      console.log(response);
    });
    // console.log(newFlight);
  };
});

// update trip

// // display trips
