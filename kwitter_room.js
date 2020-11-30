
//ADD YOUR FIREBASE LINKS HERE
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

    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_names = childKey;
        console.log("Room Name - " + Room_names); 
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }

function adduser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "Kwitter_room.html";
  }
  function redirectToRoomName(Name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "Kwitter_room.html";
  }
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
  }