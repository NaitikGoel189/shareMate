var firebaseConfig = {
    apiKey: "AIzaSyARntH175NG-Vegb02ZrrXqS_qGh7nug50",
    authDomain: "hw-37489.firebaseapp.com",
    projectId: "hw-37489",
    storageBucket: "hw-37489.appspot.com",
    messagingSenderId: "833575695435",
    appId: "1:833575695435:web:56e56682a2c4e55c4049ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() 
{firebase.database().ref("/").on('value',
 function(snapshot)
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
console.log(room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"

      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}


