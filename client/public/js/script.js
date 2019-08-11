// // create new trip
// alert("hello");

$('#submit').on('click', function (event) {
  console.log('wrong place');
  event.preventDefault();

  var newTrip = {
    tripName: $('#firstName').val().trim(),
    startDate: $('#startDate').val().trim(),
    endDate: $('#endDate').val().trim()
  };

  $.post('/api/trips', newTrip).then(function (response) {
    console.log(response);
  });
});

// create flight/lodging/transport
// $('#updateTrip').on('click', function (event) {
//   event.preventDefault();
//   thisIsIt(); alert('you are in the update');
//   // $(document).ready(function(){
//   //     $("select.country").change(function(){
//   //         var selectedCountry = $(this).children("option:selected").val();
//   //         alert("You have selected the country - " + selectedCountry);
//   //     });
//   // });
// //   var travelType = $('#tripSelect').children('option:selected').val();
// //   alert('You have selected ' + travelType);
// });

$('#updateTrip').on('submit', function (event) {
  event.preventDefault();
  var tripId = 1;

  var typeId = $(this).children('.tripType').val();
  $.ajax({
    method: 'POST',
    url: '/' + typeId + '/update/' + tripId
  }).then(function (data) {
    // reload page to display devoured burger in proper column
    console.log(data);
    // location.reload();
  });
});

// update trip

// // display trips
