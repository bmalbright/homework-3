// Assignment Code
var generateBtn = document.querySelector("#generate");

//establishes the variable finalPassword
var finalPassword = []

//establishes the available characters for the password in arrays by upperCase, lowerCase, numbers, and symbols
var upper = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", ":", "$", "%", "^", "&", "*", "_", "+", "=", "-"];

// Write password to the #password input
function writePassword() {

  //prompt to establish the length of the password
  var pwLength = prompt("How long should your password be? (8-128)");
  while (pwLength < 8 && pwLength > 128) {
    alert("Please enter a correct length");
    var pwLength = prompt("How long should your password be? (8-128)");
  }
  console.log(pwLength)

  //I'm making lowerCase the default characters in the password. This asks if upperCase letters should be included. 
  //If upperCase letter are desired, it adds them to the lower array.
  var pwUpper = window.confirm("Include upper case letters?");
  if (pwUpper == true) {
    lower = lower.concat(upper);
  }
console.log(lower);

//Asks if numbers should be included in the password. If so, they are added to the lower array.
var pwNumbers = window.confirm("Include numbers?");
if (pwNumbers == true) {
  lower = lower.concat(numbers);
}
console.log(lower);

//Asks if symbols should be included in the password. If so, they are added to the lower array. 
var pwSymbols = window.confirm("Include symbols?");
if (pwSymbols == true) {
  lower = lower.concat(symbols);
}
console.log(lower);

//Does the math and randomly selects characters for the password. 
for(var i=0; i < pwLength; i ++) {
    lower[Math.floor(Math.random() * lower.length)];
    finalPassword.push(lower[Math.floor(Math.random() * lower.length)])
}
console.log(finalPassword)

  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword.join("");


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

