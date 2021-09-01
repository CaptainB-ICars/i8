var  firebaseConfig = {
      apiKey: "AIzaSyAeM80VffXiikR7ogq0P6PorWyExtNezvI",
      authDomain: "bmw-i8-99f31.firebaseapp.com",
      projectId: "bmw-i8-99f31",
      storageBucket: "bmw-i8-99f31.appspot.com",
      messagingSenderId: "448591059684",
      appId: "1:448591059684:web:c9c16271191a0ec3dbaaf1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("user's name");
document.getElementById("user_name").innerHTML="Welcome "+username+"!";

function addroom()
{
      roomname=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"This is the roomname(but something will happen!)"
      });
      localStorage.setItem("room name",roomname);
      window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='ReDirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";     
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function ReDirectToRoomName(name)
{
      localStorage.setItem("room name",name);
      window.location="kwitter_page.html";
    
}


function logout()
{
      localStorage.removeItem("user's name");
      localStorage.removeItem("room name");
      window.location="index.html"
}




