function playSong(id){
  var audio = document.getElementById(id);
  audio.paused ? audio.play() : audio.pause();
}

function showLogin(){
  document.getElementById("loginBox").style.display="block";
}

function login(){
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;

  if(user==="admin" && pass==="1234"){
    alert("Login Successful 🎉");
    document.getElementById("loginBox").style.display="none";
  } else {
    alert("Wrong Credentials");
  }
}
