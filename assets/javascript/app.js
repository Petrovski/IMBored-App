
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBW_UAyk4RnCZeqPf7ErrFVIu7qjnSxQ1w",
    authDomain: "imbored-390fd.firebaseapp.com",
    databaseURL: "https://imbored-390fd.firebaseio.com",
    projectId: "imbored-390fd",
    storageBucket: "imbored-390fd.appspot.com",
    messagingSenderId: "696550808323"
  };
  firebase.initializeApp(config);

  // create a variable that will represent the database
  var database = firebase.database();

  // create a function that will initialize the map
  var map;
  function initMap(mapObject) {
    // initially the map will be centered on Orlando Florida
    var city = {lat: mapObject.coord.lat, lng: mapObject.coord.lon};
    // create the map options object and store it in a variable
    var options = {
      center: city,
      zoom: 10
    };
    // create a new map object and store it in a variable
    map = new google.maps.Map(document.getElementById("map"), options);
  };

  // once the submit button for the location field is clicked
  $("#submit-location").on("click", function(event) {
    // prevent the page from refreshing
    event.preventDefault();
    // grab the value of the inputted text and store in a location variable
    var location = $("#location-text").val().trim().replace(/\s/g, "");
    // store the location in the database
    database.ref().push({
      location: location
    });
    // pass the location variable into the weather apikey to generate a location to determine the weather
    var weatherapiKey = "b10625466a55e27be4ed5f51f5d69c91",
    queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + weatherapiKey;
    console.log(location);
    // create the ajax call that will run the weather api and initialize the map
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);
      initMap(response);
    });
    // create a button on the map of the location name that will determine the weather on click
  });