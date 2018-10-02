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