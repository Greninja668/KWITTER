var firebaseConfig = {
      apiKey: "AIzaSyD4ACo3eiBkZP-3Z_mzQyZaZypl-8UtEnY",
      authDomain: "kwitter-2-c2c28.firebaseapp.com",
      databaseURL: "https://kwitter-2-c2c28-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-c2c28",
      storageBucket: "kwitter-2-c2c28.appspot.com",
      messagingSenderId: "274806537517",
      appId: "1:274806537517:web:23923e56c8e53b339c67a4"
    };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome "+user_name+"!"
function add_room(){
room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
})
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"   
}
function getData() {firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name - "+Room_names);
      row="<div class='room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row
      });});}
getData(); 
function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("room_name",name)
  window.location="kwitter_page.html"
}
function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
window.location="index.html"
}
