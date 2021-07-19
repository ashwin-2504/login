function login() 
{
  var x = document.getElementById("uname").value;
  
  
  var y = document.getElementById("pword").value;
  

  
  var user_name = "admin";
  var password = "admin";

  if(x == user_name && y == password)
  {
    window.location.replace('https://codingbeast2.github.io/home/')
  }
  else
  {
    alert("Username or Password is incorrect");
  }
  
}