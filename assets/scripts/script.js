/**
 * @file Initializes the Firebase app.
 * @author saifkhichi96
 */
'use strict';

const firebaseVersion = "8.10.1"
$.getScript("https://www.gstatic.com/firebasejs/" + firebaseVersion + "/firebase-app.js", function() {
  console.log("Initializing Firebase app...");
  firebase.initializeApp({
    apiKey: "AIzaSyD-KEP7A1eVAzYaNDahzOUqeCLJaMK4lfk",
    authDomain: "meet-saifkhichi96.firebaseapp.com",
    databaseURL: "https://meet-saifkhichi96.firebaseio.com",
    projectId: "meet-saifkhichi96",
    storageBucket: "meet-saifkhichi96.appspot.com",
    messagingSenderId: "727257041805",
    appId: "1:727257041805:web:7049b6b5f6abba5ed4cbc4",
    measurementId: "G-Z2P8EMEFG7"
  });

  console.log("Enabling Firebase Analytics...");
  $.getScript("https://www.gstatic.com/firebasejs/" + firebaseVersion + "/firebase-analytics.js", function() {
    firebase.analytics();
  });

  $.getScript("https://www.gstatic.com/firebasejs/" + firebaseVersion + "/firebase-auth.js");
  $.getScript("https://www.gstatic.com/firebasejs/" + firebaseVersion + "/firebase-database.js");
  $.getScript("https://www.gstatic.com/firebasejs/" + firebaseVersion + "/firebase-storage.js");
});
