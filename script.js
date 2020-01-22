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


//Helper function that returns a password of given length, with correct array elements
function passwordHelp(passLen, array) {
  var tempPassword = '';
  for (let i = 0; i < passLen; i++) {
    tempPassword += array[Math.floor(Math.random() * array.length)];
  }
  return tempPassword;
}

function generatePassword(){
  var finalPassword = '';
  var condCriteria = true;
  var condLength = true;

  //Arrays containing characters for password criteria
  var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharArr = [`!`, `"`, `#`, `$`, `&`, `'`, `*`, `+`,`,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, ` \\ `, `]`, `^`, `_`, '`', `,`, `|`, `}`, `~`];


  var passwordLength = prompt('How long would like the password to be? (min lenght of 8, max length of 128): ').toLowerCase();

  //Make sure password length is correct and won't continue unless its correct
  while(condLength){


    if (passwordLength >= 8 && passwordLength <= 128){

      //Make sure correct criteria is selected in correct syntax
      while(condCriteria){

        var passwordCriteria = prompt('What criteria would you like for your password? (lowercase, uppercase, and/or special characters) *seperate words with single space, in correct order*: ').toLowerCase();

        // Depending on selected criteria, construct password with helper function
       switch (passwordCriteria){
          case 'lowercase uppercase special characters':
            var arr = lowercaseArray.concat(uppercaseArray.concat(specialCharArr));
            condCriteria = false;
            finalPassword = passwordHelp(passwordLength, arr);
            break;

          case 'lowercase uppercase':
            var arr = lowercaseArray.concat(uppercaseArray);
            condCriteria = false;
            finalPassword = passwordHelp(passwordLength, arr);
            break;

          case 'lowercase special characters':
            var arr = lowercaseArray.concat(specialCharArr);
            condCriteria = false;
            finalPassword = passwordHelp(passwordLength, arr);
            break;

          case 'uppercase special characters':
            var arr = uppercaseArray.concat(specialCharArr);
            condCriteria = false;
            finalPassword = passwordHelp(passwordLength, arr);
            break;

          case 'lowercase':
            condCriteria = false;
            finalPassword = passwordHelp(passwordLength, lowercaseArray);
            break;

          case 'uppercase':
            condCriteria = false;
            finalPassword = passwordHelp(passwordLength, uppercaseArray);
            break;

          case 'special characters':
            condCriteria = false;
            finalPassword = passwordHelp(passwordLength, specialCharArr);
            break;

          default:
           passwordCriteria = prompt('Invalid input, please select one or more from this list: (lowercase, uppercase, and/or special characters) *seperate words with single space, in correct order*: ').toLowerCase();
            break;

        }
        condLength = false;
        return finalPassword;
      }
      // prompt if user input is invalid
    } else {
     passwordLength =  prompt('Password length does not meet criteria, please choose a number between 8 and 128, inclusive: ').toLowerCase();
   }
  }
}
