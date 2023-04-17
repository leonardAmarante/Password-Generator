// targets button element
var button = document.getElementById('password-generator-button');
// targets <P> element
var passwordisplayer = document.getElementById('password-generator');
// password limits data
var lowercasevarters = 'abcdefghijklmnopqrstuvwxyz'
var uppercasevarters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var characters = ''
var symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-='
var numbers = '0123456789'

// event listener <button>
document.getElementById("password-generator-button").addEventListener("click", function () {

  var passwordlength = ''
  //  user prompts!
  var lenght = prompt('What Would Be Your Password Lenght? (CHOOSE BETWEEN 1 AND 128)')
  // if statements for lenght prompt!
  if (lenght > 0 && lenght < 129) {
    console.log('password length sucessfull!')
    passwordlength += lenght.valueOf(lenght)
  }
  else {
    alert('PLEASE CHOOSE A CORRECT PASSWORD LENGHT!!!')
    return;
  }

  console.log(passwordlength)

  //confirms!
  var lowercase = confirm('would you like lowercase letters in your password?')
  var uppercase = confirm('would you like uppercase letters in your password?')
  var symbol = confirm('would you like Symbols in your password?')
  var number = confirm('would you like numbers in your password?')


  // if statements for confirm!
  if (lowercase) {
    characters += lowercasevarters
  }
  if (uppercase) {
    characters += uppercasevarters
  }
  if (symbol) {
    characters += symbols
  }
  if (number) {
    characters += numbers
  }




  var password = ''; 
  for (let i = 0; i < passwordlength; i++) {
    var random = Math.floor(Math.random() * characters.length);
    password += characters[random];
  }

  passwordisplayer.textContent = password;





  passwordisplayer.setAttribute('style', 'font-size:100px;', 'color:white;')





});

