// Assignment code here
//length of password
var min_length = 8; //Minimum length of password
var max_length = 128; //Maximum length of the password
var p_length = window.prompt("What is the length of the password?"); //input value by user

//pasword properties
const upper = "abcdefghijklmnopqrstuvwxyz"
const lower = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

//Criterias for Password
// var upper_case = window.prompt("Click 1 if you want Upper Case letters. Click 0 if you don't.")
// var lower_case = window.prompt("Click 1 if you want Lower Case letters. Click 0 if you don't.")
// var numeric = window.prompt("Click 1 if you want Numeric Numbers. Click 0 if you don't.")
// var special_c = window.prompt("Click 1 if you want Special Characters letters. Click 0 if you don't.")

// (if upper_case ===1)
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Generate Password
function generatePassword () {

  var characters = "";
//checking for upper case requirement
if (upper_case===1) {
  characters=upper
}
//checking for lower case requirement
if (lower_case===1) {
  characters=lower+characters
}
//checking for numbers requirement
if (numeric===1) {
  characters=numbers+characters
}
//checking for special characters requirement
if (spe===1) {
  special_c=special_c+characters
}

for (let i = 0; i < p_length; i++) {
  Math.floor(Math.random() * 11);
}

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
