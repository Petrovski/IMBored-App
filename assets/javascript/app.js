
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

  // create the ajax call that will run the weather api
  var weatherapiKey = "b10625466a55e27be4ed5f51f5d69c91",
      queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=" + weatherapiKey
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);
    initMap(response);
  });