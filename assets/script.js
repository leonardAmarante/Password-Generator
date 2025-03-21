// password characters!
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const symbols = "!@#$%^&*()_+~`|}{[]\:;&&><,./-="
const numbers = "0123456789"
let password;
let isClick = false




function handleSubmit(event, userAttributes) {
  event.preventDefault(); // Prevents default form submission

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  userAttributes = data

  return getUserAttributes(userAttributes);
}

function getUserAttributes(userAttributes, usercharacters) {
  if (Object.keys(userAttributes).length >= 2) {
    usercharacters = ""
    userAttributes.lowerCase && (usercharacters += lowercase);
    userAttributes.upperCase && (usercharacters += uppercase);
    userAttributes.numbers && (usercharacters += numbers);
    userAttributes.symbols && (usercharacters += symbols);




    return generatePassword(userAttributes, usercharacters)
  }

  else {
    return alert("choose an attribute!")
  }
}


document.getElementById("range").addEventListener("input", function (event) {
  let sliderValue = event.target.value;

  document.getElementById("customInput").value = sliderValue

  return sliderValue

});




function generatePassword(userAttributes, usercharacters) {
  password = ""
  for (let i = 0; i < userAttributes.customInput; i++) {

    const random = Math.floor(Math.random() * usercharacters.length)
    password += usercharacters[random]; // Append character instead of overwriting



  }

  return displayPassword()
}


function displayPassword() {
  document.getElementById("passwordForm").style.display = "none"
  if (!isClick) {

    const returnButton = document.createElement("button")
    const passwordTitle = document.createElement("h3")
    const copyButton = document.createElement("button")
    const passwordHolder = document.createElement("div")
    const passwordText = document.createElement("p")
    const copyImg = document.createElement("img")

    copyImg.src = "./assets/copy-icon.png"
    passwordTitle.textContent = "Your Password Was Generated!"
    passwordText.textContent = password
    returnButton.textContent = "Generate new password"
    copyButton.append(copyImg)

    copyButton.id = "copyBtn"
    passwordText.id = "password"
    copyImg.id = "copyImg"
    returnButton.id = "return-btn"
    passwordHolder.id = "passwordHolder"

    returnButton.className = "return-btn"
    passwordHolder.className = "password-holder"

    passwordHolder.append(passwordTitle, passwordText, copyButton, returnButton)

    document.getElementById("main").append(passwordHolder)
    isClick = true
  }

  else {
    passwordHolder.style.display = "flex"
    return document.getElementById("password").textContent = password
  }



  // copyBtn section
  document.getElementById("copyBtn").addEventListener("click", async () => {
    const text = document.getElementById("password").innerText;

    try {
      await navigator.clipboard.writeText(text);
      document.getElementById("copyImg").src = "./assets/check.png"
      setTimeout(() => {
        document.getElementById("copyImg").src = "./assets/copy-icon.png"
      }, 600)

    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy text.');
    }
  });



  // generate new password 
  document.getElementById("return-btn").addEventListener("click", () => {
    document.getElementById("passwordHolder").style.display = "none"
    document.getElementById("passwordForm").style.display = "flex"

  })
}


