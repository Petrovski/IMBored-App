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
  var city = { lat: mapObject.coord.lat, lng: mapObject.coord.lon };
  // create the map options object and store it in a variable
  var options = {
    center: city,
    zoom: 10
  };

  var marker = new google.maps.Marker({
    position: city,
    map: map,
    title: 'Hello World!'
  });
  // create a new map object and store it in a variable
  map = new google.maps.Map(document.getElementById("map"), options);
  marker.setMap(map);
};

// create the ajax call that will run the weather api

$("#submit").on("click", function () {

  event.preventDefault();

  var zipcode = $("#zipcode").val().trim()

  $('html, body').animate({
    scrollTop: $("#weather").offset().top
  }, 1000);

  var weatherapiKey = "b10625466a55e27be4ed5f51f5d69c91",
    queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&units=imperial&appid=" + weatherapiKey
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    initMap(response);
    var temperature = response.main.temp;
    var humidity = response.main.humidity;
    var windspeed = response.wind.speed;
    var clouds = response.weather[0].description;
    var pressure = response.main.pressure;

    var fivemiles = document.getElementById("5miles").checked;
    var tenmiles = document.getElementById("10miles").checked;
    var fifteenmiles = document.getElementById("15miles").checked;
    var twentymiles = document.getElementById("20miles").checked;
    var free = document.getElementById("free").checked;
    var fee = document.getElementById("fee").checked;
    var indoor = document.getElementById("indoor").checked;
    var outdoor = document.getElementById("outdoor").checked;

    if (fivemiles) {
      console.log(fivemiles);
    }

    if (tenmiles) {
      console.log(tenmiles);
    }

    if (fifteenmiles) {
      console.log(fifteenmiles);
    }

    if (twentymiles) {
      console.log(twentymiles);
    }

    if (free) {
      console.log(free);
    }

    if (fee) {
      console.log(fee);
    }

    if (indoor) {
      console.log(indoor);
    }

    if (outdoor) {
      console.log(outdoor);
    } else

      console.log(zipcode);

    $("#weather").css("background-color", "white");
    $("#weather").css("border", "5px solid black");
    $("#weather").css("border-radius", "5px");
    $("#weather").css("height", "400px");
    $("#weather").css("width", "50%");

    var newWeather = $("<table>").append(
      $("<tr>").html("<td>" + "Temperature: " + temperature + "°F" + "</td>"),
      $("<tr>").html("<td>" + "Humidity: " + humidity + "%" + "</td>"),
      $("<tr>").html("<td>" + "Wind Speed: " + windspeed + " MPH" + "</td>"),
      $("<tr>").html("<td>" + "Skies: " + clouds + "</td>"),
      $("<tr>").html("<td>" + "Pressure: " + pressure + " mb" + "</td>"),
    )

    $("#weather").append(newWeather);

    $("#zipcode").val("");

  });

    database.ref().push({
      zipcode: zipcode,
      temperature: temperature,
      humidity: humidity,
      pressure: pressure,
      clouds: clouds,
      windspeed: windspeed,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});