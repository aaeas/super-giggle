// Assignment code here
function generatePassword() {
  console.log("In Generate Password");
  var userInput = window.prompt("How many characters do you want?")
  console.log("User entered: "+ userInput);
  // we need a choice (conditional Statement)
  if(userInput.length < 8) {
    console.log("Length not vaild")
  } else {
    console.log("Length is valid")
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  console.log("Button Clicked");
  console.log("writePassword function called");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
