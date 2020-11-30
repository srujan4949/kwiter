
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyD4qysfgP_oT4unndbwx1BEJB-6veCllgo",
    authDomain: "kwiter-e16f7.firebaseapp.com",
    databaseURL: "https://kwiter-e16f7.firebaseio.com",
    projectId: "kwiter-e16f7",
    storageBucket: "kwiter-e16f7.appspot.com",
    messagingSenderId: "464811768212",
    appId: "1:464811768212:web:42665a328e0c8cb3c67781",
    measurementId: "G-BQDVW93103"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }