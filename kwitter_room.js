
//ADD YOUR FIREBASE LINKS HERE// Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyA9GBCPYEq-dNsN6WfbsVl4c048puU4UIA",
      authDomain: "kwitter-db071.firebaseapp.com",
      databaseURL: "https://kwitter-db071-default-rtdb.firebaseio.com",
      projectId: "kwitter-db071",
      storageBucket: "kwitter-db071.appspot.com",
      messagingSenderId: "616304190850",
      appId: "1:616304190850:web:732e60ea1c4d0cded19b9b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
