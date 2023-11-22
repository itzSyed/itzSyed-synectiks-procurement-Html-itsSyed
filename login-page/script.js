function validat(){
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  let regx = /^([a-z A-Z 0-9 \.]+)@([a-z A-Z 0-9-]+).([a-z]{2,8})$/;

  if (user.trim() == "" || pass.trim() == ""){
      alert("No Black value allowed")
      return false;
  }
  else if(regx.test(email)){
      return true;
  }
  else{
      document.getElementById("inv-lbl").style.visibility="visible"
      return false;
  }

} 