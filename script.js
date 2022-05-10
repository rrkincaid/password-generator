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

function generatePassword() {
    console.log("hello world");
    var pwLength = prompt("Please choose number of characters between 5 and 138:");
    var pwLowerCase = confirm("Do you wish to have lowercase letters included in your password?");
    var pwUpperCase = confirm("Do you wish to have uppercase letters included in your password?");
    var pwNumbers = confirm("Do you wish to have numbers included in your password?");
    var pwSymbols = confirm("Do you wish to have symbols included in your password?");

    if (pwLowerCase) {
        passwordOptions = passwordOptions.concat(lowerCase);
    }
    if (pwUpperCase) {
        passwordOptions = passwordOptions.concat(upperCase);
    }  
    if (pwNumbers) {
        passwordOptions = passwordOptions.concat(numbers);
    }
    if (pwSymbols) {
        passwordOptions = passwordOptions.concat(symbols);
    }
    console.log(passwordOptions);
    
    var password = "";

    for (var i = 0; i < pwLength; i++) {
        var randomChar = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
        password = password + randomChar;
    }
    return password;
}


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];


var passwordOptions = []


