// Assignment code here

//pasword properties
const upper = "abcdefghijklmnopqrstuvwxyz"
const lower = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
//length of password
var min_length = 8; //Minimum length of password
var max_length = 128; //Maximum length of the password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Generate Password
function generatePassword(p_length, upper_case, lower_case, numeric, special_c) {

  var characters = "";
  //checking for upper case requirement
  if (upper_case === "1") {
    characters = upper
  }
  //checking for lower case requirement
  if (lower_case === "1") {
    characters = lower + characters
  }
  //checking for numbers requirement
  if (numeric === "1") {
    characters = numbers + characters
  }
  //checking for special characters requirement
  if (special_c === "1") {
    characters = symbols + characters
  }
  var password = "";
  for (let i = 0; i < p_length; i++) {
    var characterNumber = Math.floor(Math.random() * characters.length); //picking a number
    var singleCharacter = characters[characterNumber] //picking a password property for a random number
    password = password + singleCharacter //creating password
  }
  return password
}

// Write password to the #password input
function writePassword() {

  var p_length = window.prompt("What is the length of the password?"); //input value by user

  if (p_length < 8 || p_length > 128) {
    alert("Please select a length between 8 to 128.")
    return
  }
  
  //Criterias for Password
  var upper_case = window.prompt("Click 1 if you want Upper Case letters. Click 0 if you don't.")
  while (upper_case !=="1" && upper_case !=="0" && upper_case!==null) {
    upper_case = window.prompt("Please select a valid response. Click 1 if you want Upper Case letters. Click 0 if you don't.")
  }
  var lower_case = window.prompt("Click 1 if you want Lower Case letters. Click 0 if you don't.")
  while (lower_case !=="1" && lower_case !=="0"&& lower_case!==null) {
    lower_case = window.prompt("Please select a valid response. Click 1 if you want Lower Case letters. Click 0 if you don't.")
  }
  var numeric = window.prompt("Click 1 if you want Numeric Numbers. Click 0 if you don't.")
  while (numeric !=="1" && numeric !=="0"&& numeric!==null) {
    numeric = window.prompt("Please select a valid response. Click 1 if you want Numeric Numbers. Click 0 if you don't.")
    }
  var special_c = window.prompt("Click 1 if you want Special Characters. Click 0 if you don't.")
 while (special_c !=="1" && special_c !=="0" && special_c!==null) {
    special_c = window.prompt("Please select a valid response. Click 1 if you want Special Characters. Click 0 if you don't.")
    }
  
  var password = generatePassword(p_length, upper_case, lower_case, numeric, special_c);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

