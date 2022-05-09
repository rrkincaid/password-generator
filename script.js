// Assignment Code
//charset codes - http://www.net-comber.com/charset.html 

var generateBtn = document.querySelector("#generate");


var userChoiceLength = window.prompt("Please choose number of characters between 5 and 138:");
console.log(userChoiceLength);

var userChoiceLower = window.prompt("Do you wish to have lowercase letters included in your password?:  yes / no");
console.log(userChoiceLower);

var userChoiceUpper = window.prompt("Do you wish to have uppercase letters included in your password?:  yes / no");
console.log(userChoiceUpper);

var userChoiceNumber = window.prompt("Do you wish to have numbers included in your password?:  yes / no");
console.log(userChoiceNumber);

var userChoiceSymbol = window.prompt("Do you wish to have symbols included in your password?:  yes / no");
console.log(userChoiceSymbol);

var userOptions = ["yes", "no"];

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

const passwordEl = document.getElementById("password")
const generateEl = document.getElementById("generate")

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower);

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper);

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber);

function getRandomSymbol() {
    const symbol = "!@#$%^&*"; 
    return symbol[Math.floor(Math.random() * symbol.length)];
}
console.log(getRandomSymbol);

//generateEl.addEventListener("click", () => {
    //    const length = +lengthEl.value;
    //    const hasLower = lowercaseEl.checked;
    //    const hasUpper = uppercaseEl.checked;
    //    const hasNumber = numberEl.checked;
    //    const hasSymbol = symbolsEl.checked;
//})

//generateEl.innerText - generatePassword(
//    hasLower,
//    hasUpper,
//    hasNumber,
//    hasSymbol,
//    length
//);


//function generatePassword(lower, upper, number, symbol, length) {
    //1. init pw var
    //2. filter out unselected types
    //3. loop over the length call generator function for each type 
    //4. add the final password to the pw var and return 
//    let generatedPassword = "";
//    const typesCount = lower + upper + number + symbol;

//    console.log("typesCounty: ", typesCount);

//    const typesArr = [lower, upper, number, symbol];

//    console.log("typesArr: ", typesArr);
//}


//

//var characterAmount = window.prompt("Please choose number of characters between 5 and 138:")

//var characterOptions = [x > 5, x < 138]
    //x >= 5, x <= 138; //need to define this better
//var userInputLower = window.prompt("Do you wish to have lowercase letters included in your password?:  yes / no")

//var lowerCaseOption = ("yes")

//var userInputUpper = window.prompt("Do you wish to have uppercase letters included in your password?:  yes / no")

//var upperCaseOption = ("yes")

//var userInputNumber = window.prompt("Do you wish to have numbers included in your password?:  yes / no")

//var NumberOption = ("yes")

//var userInputSymbol = window.prompt("Do you wish to have symbols included in your password?:  yes / no")

//var SymbolOption = ("yes")

//var userChoice = window.prompt("")



//preventDefault()

//e.preventDefault()

//numeric ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] 
// special characters? [!, @, #, $, %, ^, &, *];
// uppercase? [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z], [];

// -->dont have to use all perameters, but must choose at least one


