// Assignment code here
function generatePassword() {

  function length() {
    // window.prompt for parseInt value between 8-128
    var validateLength = 0
    // if invalid value is entered
      var validInput = false;
      while(!validInput) {
        validateLength = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128.");
  
        // convert to an actual number
        validateLength = parseInt(validateLength);
  
        validInput = validateLength >= 8 && validateLength <= 128;
  
        if(!validInput) {
          window.alert("You did not pick a valid option. Try again.");
        }
      }
    }
  
  var lowerCase = window.confirm("Include lowercase letters?");
    // if yes, include lowercase letters in generatePassword
  
  var upperCase = window.confirm("Include uppercase letters?");
    // if yes, include uppercase letters in generatePassword
  
  var numeric = window.confirm("Include numbers?");
    //  if yes, include numbers in generatePassword
  
  var specialCharacters = window.confirm("Include special characters?");
    // if yes, include special characters in generatePassword
  




}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
