// Password characters for generating passwords
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()_+~`|}{[]\\:;&&><,./-=";
const numbers = "0123456789";
let password;
let isClick = false;

// Handle form submission and gather user input
function handleSubmit(event, userAttributes) {
  event.preventDefault(); // Prevents default form submission behavior

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  userAttributes = data;

  return getUserAttributes(userAttributes);
}

// Validate and retrieve user attributes for password generation
function getUserAttributes(userAttributes) {
  // Ensure user selects at least one attribute and sets a valid password length
  if (Object.keys(userAttributes).length < 2 || userAttributes.customInput < 1) {
    return alert("Please write a digit greater than 1 and choose attributes!");
  }

  // Reset and build character set based on user choices
  usercharacters = "";
  userAttributes.lowerCase && (usercharacters += lowercase);
  userAttributes.upperCase && (usercharacters += uppercase);
  userAttributes.numbers && (usercharacters += numbers);
  userAttributes.symbols && (usercharacters += symbols);

  return generatePassword(userAttributes, usercharacters);
}

// Update slider value in the input field
document.getElementById("range").addEventListener("input", function (event) {
  let sliderValue = event.target.value;
  document.getElementById("customInput").value = sliderValue;
  return sliderValue;
});

// Generate password using user-specified attributes
function generatePassword(userAttributes, usercharacters) {
  password = "";
  for (let i = 0; i < userAttributes.customInput; i++) {
    const random = Math.floor(Math.random() * usercharacters.length);
    password += usercharacters[random]; // Append character instead of overwriting
  }

  return displayPassword();
}

// Display the generated password and copy/return options
function displayPassword() {
  document.getElementById("passwordForm").style.display = "none";

  if (!isClick) {
    // Create DOM elements for displaying password and buttons
    const returnButton = document.createElement("button");
    const passwordTitle = document.createElement("h3");
    const copyButton = document.createElement("button");
    const passwordHolder = document.createElement("div");
    const passwordText = document.createElement("p");
    const copyImg = document.createElement("img");

    // Set properties and content for elements
    copyImg.src = "./assets/copy-icon.png";
    passwordTitle.textContent = "Your Password Was Generated!";
    passwordText.textContent = password;
    returnButton.textContent = "Generate new password";
    copyButton.append(copyImg);

    // Set element IDs and classes
    copyButton.id = "copyBtn";
    passwordText.id = "password";
    copyImg.id = "copyImg";
    returnButton.id = "return-btn";
    passwordHolder.id = "passwordHolder";
    returnButton.className = "return-btn";
    passwordHolder.className = "password-holder";

    passwordHolder.append(passwordTitle, passwordText, copyButton, returnButton);
    document.getElementById("main").append(passwordHolder);
    isClick = true;
  } else {
    passwordHolder.style.display = "flex";
    document.getElementById("password").textContent = password;
  }

  // Copy password to clipboard
  document.getElementById("copyBtn").addEventListener("click", async () => {
    const text = document.getElementById("password").innerText;

    try {
      await navigator.clipboard.writeText(text);
      document.getElementById("copyImg").src = "./assets/check.png";
      setTimeout(() => {
        document.getElementById("copyImg").src = "./assets/copy-icon.png";
      }, 600);
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy text.');
    }
  });

  // Handle return button to generate a new password
  document.getElementById("return-btn").addEventListener("click", () => {
    document.getElementById("passwordHolder").style.display = "none";
    document.getElementById("passwordForm").style.display = "flex";
  });
}