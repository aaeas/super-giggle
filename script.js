// Assignment code here
var HasCapitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var HasLowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
var HasNumbers = "0123456789"
var HasSpecialCharacters = "!@#$%^&*"

function generatePassword() {

  var myPass = '';
  var passwordCharacterHolder = ''

  console.log("In Generate Password");
  var userCharacters = window.prompt("How many characters would you like? Choose between 8-128.")
  console.log("User entered: " + userCharacters);
  // we need a choice (conditional Statement)
  if (userCharacters < 8) {
    alert("Length not vaild")
    return null;
  }

  if (userCharacters > 128) {
    alert("Length is valid")
    return null;
  }
  //Would you like capital letters?
  var userHasCapitalLetters = window.confirm("Would you like capital letters?")
  console.log("User entered: " + HasCapitalLetters);

  //would you like lower case letters?

  var userHasLowerCaseLetters = window.confirm("Would you like lowercase letters?")
  console.log("User entered: " + HasLowerCaseLetters);

  //would you like numbers?

  var userHasNumbers = window.confirm("Would you like numbers? (0-9) ")
  console.log("User entered: " + HasNumbers);

  //would you like special characters?

  var userHasSpecialCharacters = window.confirm("Would you like special characters? (!, @, #, $, %, ^, &, *)")
  console.log("User entered: " + HasSpecialCharacters);

  //if they want a character then add it to the myPass variable
  if (HasCapitalLetters) {
    passwordCharacterHolder += HasCapitalLetters
  }
  if (HasLowerCaseLetters) {
    passwordCharacterHolder += HasLowerCaseLetters
  }
  if (HasNumbers) {
    passwordCharacterHolder += HasNumbers
  }
  if (userHasSpecialCharacters) {
    passwordCharacterHolder += HasSpecialCharacters
  }
  for (var i = 0; i < userCharacters; i++) {
    //adding a character at random from our passwordcharacter holder
    myPass += passwordCharacterHolder.charAt(Math.floor(Math.random() * passwordCharacterHolder.length))
  }

  return myPass;
}
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

// Add event listener to generate button`
generateBtn.addEventListener("click", writePassword);
