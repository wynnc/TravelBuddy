// // create new trip
// alert("hello");
// var userId
$('#submit').on('click', function (event) {
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


// $(document).ready(function () {
//   // Getting references to the name input and trip container, as well as the table body
//   var nameInput = $('#trip-name');
//   var tripList = $('tbody');
//   var tripContainer = $('.trip-container');
//   // Adding event listeners to the form to create a new object, and the button to delete
//   // an trip
//   $(document).on('submit', '#trip-form', handleTripFormSubmit);
//   $(document).on('click', '.delete-trip', handleDeleteButtonPress);

//   // Getting the initial list of trips
//   getTrips();

//   // A function to handle what happens when the form is submitted to create a new trip
//   function handleTripFormSubmit (event) {
//     event.preventDefault();
//     // Don't do anything if the name fields hasn't been filled out
//     if (!nameInput.val().trim().trim()) {
//       return;
//     }
//     // Calling the inserttrip function and passing in the value of the name input
//     insertTrip({
//       name: nameInput
//         .val()
//         .trim()
//     });
//   }

//   // A function for creating a trip. Calls gettrips upon completion
//   function insertTrip (tripData) {
//     $.post('/api/trips', tripData)
//       .then(getTrips);
//   }

//   // Function for creating a new list row for Trips
//   function createTripRow (tripData) {
//     var newTr = $('<tr>');
//     newTr.data('trip', tripData);
//     newTr.append('<td>' + tripData.name + '</td>');
//     if (tripData.Posts) {
//       newTr.append('<td> ' + tripData.Posts.length + '</td>');
//     } else {
//       newTr.append('<td>0</td>');
//     }
//     newTr.append("<td><a href='/blog?trip_id=" + tripData.id + "'>Go to Posts</a></td>");
//     newTr.append("<td><a href='/cms?trip_id=" + tripData.id + "'>Create a Post</a></td>");
//     newTr.append("<td><a style='cursor:pointer;color:red' class='delete-trip'>Delete Trip</a></td>");
//     return newTr;
//   }

//   // Function for retrieving trips and getting them ready to be rendered to the page
//   function getTrips () {
//     $.get('/api/trips', function (data) {
//       var rowsToAdd = [];
//       for (var i = 0; i < data.length; i++) {
//         rowsToAdd.push(createTripRow(data[i]));
//       }
//       renderTripList(rowsToAdd);
//       nameInput.val('');
//     });
//   }

//   // A function for rendering the list of trips to the page
//   function renderTripList (rows) {
//     tripList.children().not(':last').remove();
//     tripContainer.children('.alert').remove();
//     if (rows.length) {
//       console.log(rows);
//       tripList.prepend(rows);
//     } else {
//       renderEmpty();
//     }
//   }

//   // Function for handling what to render when there are no trips
//   function renderEmpty () {
//     var alertDiv = $('<div>');
//     alertDiv.addClass('alert alert-danger');
//     alertDiv.text('You must create a trip before you can create a flight.');
//     tripContainer.append(alertDiv);
//   }

//   // Function for handling what happens when the delete button is pressed
//   function handleDeleteButtonPress () {
//     var listItemData = $(this).parent('td').parent('tr').data('trip');
//     var id = listItemData.id;
//     $.ajax({
//       method: 'DELETE',
//       url: '/api/trips/' + id
//     })
//       .then(getTrips);
//   }
// });
