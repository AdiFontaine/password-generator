// Assignment code here
function generatePassword() {

  var password;

  function length() {
    // window.prompt for parseInt value between 8-128
    var validateLength = 0;

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

      // newVar validateLength = validateLength;
      // return validateLength;
    }

  length();  
  
  function characters() {
    var lowerCase = window.confirm("Include lowercase letters?");
      // if yes, include lowercase letters in generatePassword
      if (lowerCase) {
        const lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      }
  
    var upperCase = window.confirm("Include uppercase letters?");
      // if yes, include uppercase letters in generatePassword
      if (upperCase) {
        const upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
      }
  
    var numeric = window.confirm("Include numbers?");
      //  if yes, include numbers in generatePassword
      if (numeric) {
        const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      }
  
    var specialCharacters = window.confirm("Include special characters?");
      // if yes, include special characters in generatePassword
      if (specialCharacters) {
        const specialCharacterList = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"]
      }
    
    // if user did not select yes for any
    if (!lowerCase && !upperCase && !numeric && !specialCharacters) {
      window.alert("You must choose at least one option from the list.");
      characters();
    }

    //if user selected all
    else if () {

    }

    // if user selected three
    else if () {

    }

    // if user selected two
    else if () {

    }

    // if user selected one
    else if () {

    }

    // need to return values to call at global scale from local prompts
  }
  
  characters();

  // randomize based off user input, called globally



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
