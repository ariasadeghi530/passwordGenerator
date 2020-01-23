// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Helper function that returns a password of given length and of a given array
function passwordHelp(passLen, array) {
  var tempPassword = '';
  for (let i = 0; i < passLen; i++) {
    tempPassword += array[Math.floor(Math.random() * array.length)];
  }
  return tempPassword;
}

function generatePassword() {
  var finalPassword = '';
  var condCriteria = true;
  var condLength = true;

  //Arrays containing characters for password criteria
  var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharArr = [`!`, `"`, `#`, `$`, `&`, `'`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, ` \\ `, `]`, `^`, `_`, '`', `,`, `|`, `}`, `~`];
  var numericArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var finalArr = [];


  var passwordLength = prompt('How long would like the password to be? (min length of 8, max length of 128): ').toLowerCase();

  //Make sure password length is correct and won't continue unless its correct
  while (condLength) {


    if (passwordLength >= 8 && passwordLength <= 128) {

      //Make sure correct criteria is selected in correct syntax
      while (condCriteria) {

        var criteriaLower = confirm('Would you like lowercase characters in your password? Press OK to confirm.');
        var criteriaUpper = confirm('Would you like uppercase characters in your password? Press OK to confirm.');
        var criteriaNumeric = confirm('Would you like numeric characters in your password? Press OK to confirm.');
        var criteriaSpecial = confirm('Would you like special characters in your password? Press OK to confirm.');

        // if user selects criteria, concat to empty array
        if (criteriaLower) {
          condCriteria = false;
          finalArr = finalArr.concat(lowercaseArray);
        }
        if (criteriaUpper) {
          condCriteria = false;
          finalArr = finalArr.concat(uppercaseArray);
        }
        if (criteriaNumeric) {
          condCriteria = false;
          finalArr = finalArr.concat(numericArr);
        }
        if (criteriaSpecial) {
          condCriteria = false;
          finalArr = finalArr.concat(specialCharArr);
        }
        //if no criteria seleccted, keep asking
        if (!(criteriaLower) && !(criteriaUpper) && !(criteriaNumeric) && !(criteriaSpecial)) {
          alert("Please select at least one password criteria")
          continue;
        }

        condLength = false;
      }
      return passwordHelp(passwordLength, finalArr);

      // prompt if user input is invalid
    } else {
      passwordLength = prompt('Password length does not meet criteria, please choose a number between 8 and 128, inclusive: ').toLowerCase();
    }
  }
}
