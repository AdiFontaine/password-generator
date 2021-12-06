// Assignment code here


function length() {
  var validateLength = 0;

  // if invalid value is entered
    var validInput = false;
    while(!validInput) {
      // window.prompt for value between 8-128
      validateLength = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128.");

      // convert to an actual number
      validateLength = parseInt(validateLength);

      validInput = validateLength >= 8 && validateLength <= 128;

      if(!validInput) {
        window.alert("You did not pick a valid option. Try again.");
      }
    }

    return validateLength;
}

function characters() {
  var lowerCase = window.confirm("Include lowercase letters?");
  var upperCase = window.confirm("Include uppercase letters?");
  var numeric = window.confirm("Include numbers?");
  var specialCharacters = window.confirm("Include special characters?");

  const lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const specialCharacterList = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"]
  const numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var allOptions = [];

  // if yes, include lowercase letters in generatePassword
  if (lowerCase) {
    allOptions = [...lowerCaseList, ...allOptions];
  } 

  // if yes, include uppercase letters in generatePassword
  if (upperCase) {
    allOptions = [...upperCaseList, ...allOptions];
  }

  //  if yes, include numbers in generatePassword
  if (numeric) {
    allOptions = [...numbersList, ...allOptions];
  }

  // if yes, include special characters in generatePassword
  if (specialCharacters) {
    allOptions = [...specialCharacterList, ...allOptions];
  }
  
  // if user did not select yes for any
  if (!lowerCase && !upperCase && !numeric && !specialCharacters) {
    window.alert("You must choose at least one option from the list.");
    characters();
  }

  else {
    return allOptions;
  }
}
  
function generatePassword() {

  var newPassword = '';
  var passwordLength = length();
  var userPickedOptions = characters();

  for (var i = 0; i < passwordLength; i++){

    var randomNumber = Math.floor(Math.random() * userPickedOptions.length);
    var randomChar = userPickedOptions[randomNumber];

    newPassword = newPassword + randomChar;
  }

  return newPassword;
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
