var firebaseConfig = {
  apiKey: "AIzaSyAY3aVTbzsCFYYzlK2RGvxc-rUg-zh2u4Q",
  authDomain: "kwitter-5bef8.firebaseapp.com",
  projectId: "kwitter-5bef8",
  storageBucket: "kwitter-5bef8.appspot.com",
  messagingSenderId: "746156506600",
  appId: "1:746156506600:web:e4229d548e48c34985b85d"
};


firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
   name:user_name,
   message : msg,
   like:0 
  });

  document.getElementById("msg").value="";  
}