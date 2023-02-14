var button = document.getElementById('password-generator-button');
var passwordisplayer = document.getElementById('Password-generator');
var limits = "abcdefghiklmopqrstuvwxyzABCDEFGHIKLMOPQRSTUVWXYZ0123456789!@#$%^&*()?<<";



document.getElementById("password-generator-button").addEventListener("click", function () {
 var message = prompt("choose your password length between 4, 8, 12, 16, 20, 24")
  if ( message == 4) {
  alert("Password Generated")
   var passwordLength = 4;
   var password = "";
   for (var i = 0; i < passwordLength; i++) {
    password += limits.charAt(Math.floor(Math.random() * limits.length));
  }
 
}
else if (message == 8){
  
  alert("Password Generated")
   var passwordLength = 8;
   var password = "";
   for (var i = 0; i < passwordLength; i++) {
    password += limits.charAt(Math.floor(Math.random() * limits.length));
 
  }
 }
 else if (message == 12){
  alert("Password Generated")
   var passwordLength = 12;
   var password = "";
   for (var i = 0; i < passwordLength; i++) {
    password += limits.charAt(Math.floor(Math.random() * limits.length));
  }
 }
 else if (message == 16){
  alert("Password Generated")
   var passwordLength = 16;
   var password = "";
   for (var i = 0; i < passwordLength; i++) {
    password += limits.charAt(Math.floor(Math.random() * limits.length));
  }
 }
 else if (message == 20){
  alert("Password Generated")
   var passwordLength = 20;
   var password = "";
   for (var i = 0; i < passwordLength; i++) {
    password += limits.charAt(Math.floor(Math.random() * limits.length));
  }
 }
 else if (message == 24){
  alert("Password Generated")
   var passwordLength = 24;
   var password = "";
   for (var i = 0; i < passwordLength; i++) {
    password += limits.charAt(Math.floor(Math.random() * limits.length));
  }
 }
 else {
  alert("Please select your lenght between this lenghts 4, 8, 12, 16, 18, 20, 24")
var password = "";

 }
  
 
 passwordisplayer.setAttribute('style', 'font-size:100px;', 'color:white;')
  passwordisplayer.innerHTML = password;

    
    

});
