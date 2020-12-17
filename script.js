// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to randomly generate a password
function generatePassword() {
  return "hello" + Date();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
