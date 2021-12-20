// Assignment code here
function generatePassword() {
  console.log("In Generate Password");
  var userInput = window.prompt("How many characters would you like? Choose between 8-128.")
  console.log("User entered: "+ userInput);
  // we need a choice (conditional Statement)
  if (userInput < 8) {
    alert("Length not vaild")
    return null;
  }

  if (userInput > 128 ){
    alert("Length is valid")
    return null;
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
