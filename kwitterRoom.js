//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyC50VqfjL5k8xBCn96O2524IXtQ16n15MI",
  authDomain: "vamos-conversar-29f95.firebaseapp.com",
  databaseURL: "https://vamos-conversar-29f95-default-rtdb.firebaseio.com",
  projectId: "vamos-conversar-29f95",
  storageBucket: "vamos-conversar-29f95.appspot.com",
  messagingSenderId: "343739021831",
  appId: "1:343739021831:web:214458355cec6b13f308a2"
};

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Bem-Vindo(a) " + user_name + "!";

function addRoom()
{
  room_name =document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitterPage.html";
}




function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       //início do código
       console.log("Room Name - " + Room_name);
       row = "<div class='room_name' id="+Room_names+" onclik='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("ouput").innerHTML += row;
       //fim do código
    });});}
getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.localStorage = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
