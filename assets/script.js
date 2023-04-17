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

// event listener for <button>
document.getElementById("password-generator-button").addEventListener("click", function () {

  var passwordlength = ''
  //  user prompt!
  var lenght = prompt('What Would Be Your Password Lenght? (CHOOSE BETWEEN 1 AND 128 CHARACTERS!)')
  // if prompts statements that retrieves user input 
  if (lenght > 0 && lenght < 129) {
    console.log('password length sucessfull!')
    passwordlength += lenght.valueOf(lenght)
  }
  else {
    alert('PLEASE CHOOSE A CORRECT PASSWORD LENGHT!!!')
    return;
  }

  console.log(passwordlength)

  // confirm alerts that collects user info!
  var lowercase = confirm('would you like lowercase letters in your password?')
  var uppercase = confirm('would you like uppercase letters in your password?')
  var symbol = confirm('would you like Symbols in your password?')
  var number = confirm('would you like numbers in your password?')


  // if statements for confirm alerts that adds values!
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
  // loop that limit is set to passwordlength value
  for (let i = 0; i < passwordlength; i++) {
    // random number based from 0 to characters.length
    var random = Math.floor(Math.random() * characters.length);
    // adds the value of character[random] to password!
    password += characters[random];
  }
// makes paragraph element <p> value equal to password value!
  passwordisplayer.textContent = password;





  passwordisplayer.setAttribute('style', 'font-size:100px;', 'color:white;')





});

