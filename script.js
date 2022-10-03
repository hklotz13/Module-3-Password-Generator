// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Setting parameters for password length, special characters, and ETC
var lowerOptions = ["abcdefghijklmnopqrstuvwxyz"];
var upperOptions = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialOptions = ["~`!@#$%^&*()_-+={[}]|:;'<,>.?/"];
var numberOptions = ["1234567890"];
// This variable will become a random string upon user input, which will then be added to the later variable emptyString to actually print the result to the text area
var options = "";

// Write password to the #password input
function writePassword() {
  event.preventDefault();
  var passwordText = document.querySelector("#password");
// Adding empty string to fill with values based on user input
var emptyString = "";

// Adding prompts for user to interact with password generator in their browser
// Asking user how long they want the password to be
var lengthPrompt = prompt("How many characters long should your password be? Choose a number between 8 and 128.");
// Asking user if they want uppercase letters
var uppercaseConfirm = confirm("Do you want your password to have uppercase letters?");
// Asking user if they want lowercase letters
var lowercaseConfirm = confirm("Do you want your password to have lowercase letters?");
// Asking user if they want numbers
var numbersConfirm = confirm("Do you want your password to have numbers?");
// Asking user if they want special characters
var specialConfirm = confirm("Do you want your password to have special characters?");

// Alerting user to restart if they did not pick a number between 8 and 128
if (lengthPrompt < 8 || lengthPrompt > 128) {
  window.alert("Please pick a character length between 8 and 128.");
  location.reload();
}
// Alerting user to restart if they did not pick any inputs
if (uppercaseConfirm === false && lowercaseConfirm === false && numbersConfirm === false && specialConfirm === false){
  window.alert("Please pick at least one criteria for your password.");
  location.reload();
}

// Confirming that user clicked OK and adding options which will be randomly assigned below
if (uppercaseConfirm) {
  options += upperOptions;
}
if (lowercaseConfirm) {
  options += lowerOptions;
}
if (numbersConfirm) {
  options += numberOptions;
}
if (specialConfirm) {
  options += specialOptions;
}

// Selecting random character(s) from arrays based on user input (if the following above are true)
for (var i = 0; i < lengthPrompt; i++) {
  emptyString += options.charAt(Math.floor(Math.random() * options.length));
}

// Putting randomly picked characters together to form password shown in the text area
passwordText.value = emptyString;
};