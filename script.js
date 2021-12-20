// Assignment code here
function generatePassword() {

var myPass= "";

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
//Would you like capital letters?
var userInput= window.confirm("Would you like capital letters?")
console.log("User entered: "+ userInput);
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ];
if (confirm('Are you sure you want to save this thing into the database?')) {
  upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
  console.log('Answer was saved to the database.');
} else {
  console.log('Answer was not saved to the database.');
}
//Would you like lower case letters?
var userInput = window.confirm("Would you like lowercase letters?")
console.log("User entered: "+ userInput);
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ];
if (confirm('Are you sure you want to save this thing into the database?')) {
  lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
  console.log('Answer was saved to the database.');
} else {
  console.log('Answer was not saved to the database.');
}
//Would you like numbers?
var userInput = window.confirm("Would you like numbers? (0-9) ")
console.log("User entered: "+ userInput);
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
if (confirm('Are you sure you want to save this thing into the database?')) {
  numbers[Math.floor(Math.random() * numbers.length)];
  console.log('Answer was saved to the database.');
} else {
  console.log('Answer was not saved to the database.');
}

//would you like special characters?

var userInput = window.confirm("Would you like special characters? (!, @, #, $, %, ^, &, *)")
console.log("User entered: "+ userInput);
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*' ];
if (confirm('Are you sure you want to save this thing into the database?')) {
  specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  console.log('Answer was saved to the database.');
} else {
  console.log('Answer was not saved to the database.');
}

}
for (let i = 0; i < 128; i++) {
  text += userInput[i] + "<br>";
}
for (let i = 0, len = upperCaseLetters.length, text = ""; i < len; i++) {
  text += upperCaseLetters[i] + "<br>";
}
for (let i = 0, len = lowerCaseLetters.length, text = ""; i < len; i++) {
  text += lowerCaseLetters[i] + "<br>";
}
for (let i = 0, len = numbers.length, text = ""; i < len; i++) {
  text += numbers[i] + "<br>";
}
for (let i = 0, len = specialCharacters.length, text = ""; i < len; i++) {
  text += specialCharacters[i] + "<br>";
}  
}
return myPass;

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
