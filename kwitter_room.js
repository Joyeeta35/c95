// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDViJPtX7q9U-ge1j9MNEYfOUyZ2OhJui4",
  authDomain: "kwitter-3046d.firebaseapp.com",
  databaseURL: "https://kwitter-3046d-default-rtdb.firebaseio.com",
  projectId: "kwitter-3046d",
  storageBucket: "kwitter-3046d.appspot.com",
  messagingSenderId: "51685617062",
  appId: "1:51685617062:web:070224d9691eddacccb367"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"Adding Room Name"
        });

        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("room_name - " + room_name);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}