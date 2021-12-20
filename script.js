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
//Would you like capital letters?
var userInput = window.confirm("Would you like capital letters?")
console.log("User entered: "+ userInput);
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ];
if (confirm('Are you sure you want to save this thing into the database?')) {
  // Save it!
  console.log('Answer was saved to the database.');
} else {
  // Do nothing!
  console.log('Answer was not saved to the database.');
}
//Would you like lower case letters?

//Would you like numbers?

//would you like special characters?
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
