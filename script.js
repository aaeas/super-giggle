// Assignment code here
function generatePassword() {

  var myPass = "";

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
  console.log("User entered: " + userHasCapitalLetters);
  const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  // if (confirm('Are you sure you want to save this thing into the database?')) {
  //   upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
  //   console.log('Answer was saved to the database.');
  // } else {
  //   console.log('Answer was not saved to the database.');
  // }
  //Would you like lower case letters?
  var userHasLowerCaseLetters = window.confirm("Would you like lowercase letters?")
  console.log("User entered: " + userHasLowerCaseLetters);
  const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
  // if (confirm('Are you sure you want to save this thing into the database?')) {
  //   lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
  //   console.log('Answer was saved to the database.');
  // } else {
  //   console.log('Answer was not saved to the database.');
  // }
  //Would you like numbers?
  var userHasNumbers = window.confirm("Would you like numbers? (0-9) ")
  console.log("User entered: " + userHasNumbers);
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // if (confirm('Are you sure you want to save this thing into the database?')) {
  //   numbers[Math.floor(Math.random() * numbers.length)];
  //   console.log('Answer was saved to the database.');
  // } else {
  //   console.log('Answer was not saved to the database.');
  // }

  //would you like special characters?

  var userHasSpecialCharacters = window.confirm("Would you like special characters? (!, @, #, $, %, ^, &, *)")
  console.log("User entered: " + userHasSpecialCharacters);
  const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  // if (confirm('Are you sure you want to save this thing into the database?')) {
  //   specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  //   console.log('Answer was saved to the database.');
  // } else {
  //   console.log('Answer was not saved to the database.');
  // }

  for (let i = 0; i < userCharacters; i++) {
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
