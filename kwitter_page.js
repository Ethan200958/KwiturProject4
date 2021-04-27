var firebaseConfig = {
      apiKey: "AIzaSyADlM4Vd6VjuvuUKEKqmbkOIhRtfuv3UVA",
      authDomain: "chatappproject2-7d702.firebaseapp.com",
      databaseURL: "https://chatappproject2-7d702.firebaseio.com",
      projectId: "chatappproject2-7d702",
      storageBucket: "chatappproject2-7d702.appspot.com",
      messagingSenderId: "626341959807",
      appId: "1:626341959807:web:616fa666086f6b4e0a074a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: username,
                message: msg,
                likes: 0
          })
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location = "index.html";
}