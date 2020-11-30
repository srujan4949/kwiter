//YOUR FIREBASE LINKS
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
  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
      like:0
      });

      document.getElementById("msg").value = "";
}
//End code
      } });  }); }
getData();
