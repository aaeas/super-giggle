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
var userInput = window.prompt("Which characters would you like to input? (Lowercase, Uppercase, Numeric, and/or Special Characters)")
console.log("User entered: "+ userInput);
const lowercaseletters = ['a', 'b', 'c',];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
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
