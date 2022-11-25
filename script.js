// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var hasLowercase;
var hasUppercase;
var hasNumbers;
var hasSpecialChars;

// Write password to the #password input
function writePassword() {
  var confirmPasswordLength = prompt("How many characters would you like your password to be?");
  if ((confirmPasswordLength < 8) || (confirmPasswordLength > 128)) {
    alert("Try a number between 8 and 128!");
    writePassword();
  } else {
    passwordLength = confirmPasswordLength;
    alert("Your password length is: " + passwordLength + " characters.");
    includeLowercase();
  }
}

function includeLowercase() {
  var confirmLowercase = prompt("Do you want to include lowercase letters in your password? \nType Y for Yes or N for No");
  if (confirmLowercase === "Y") {
    hasLowercase = true;
    alert("Your password will contain lowercase letters.");
    includeUppercase();
  } else if (confirmLowercase === "N") {
    hasLowercase = false;
    alert("Your password will not contain lowercase letters.");
    includeUppercase();
  } else {
    alert("Your answer must be Y for Yes or N for No!");
    includeLowercase();
  }
}

function includeUppercase() {
  var confirmUppercase = prompt("Do you want to include uppercase letters in your password? \nType Y for Yes or N for No");
  if (confirmUppercase === "Y") {
    hasUppercase = true;
    alert("Your password will contain uppercase letters.");
    includeNumbers();
  } else if (confirmUppercase === "N") {
    hasUppercase = false;
    alert("Your password will not contain uppercase letters.");
    includeNumbers();
  } else {
    alert("Your answer must be Y for Yes or N for No!");
    includeUppercase();
  }
}
 function includeNumbers() {
  var confirmNumbers = prompt("Do you want to include numbers in your password? \nType Y for Yes or N for No");
  if (confirmNumbers === "Y") {
    hasNumbers = true;
    alert("Your password will contain numbers.");
    includeSpecialChars();
  } else if (confirmNumbers === "N") {
    hasNumbers = false;
    alert("Your password will not contain numbers.");
    includeSpecialChars();
  } else {
    alert("Your answer must be Y for Yes or N for No!");
    includeNumbers();
  }
 }
 function includeSpecialChars() {
  var confirmChars = prompt("Do you want to include special characters in your password? \nType Y for Yes or N for No");
  if (confirmChars === "Y") {
    hasSpecialChars = true;
    alert("Your password will contain special characters.");
    youDidIt();
  } else if (confirmChars === "N") {
    hasSpecialChars = false;
    alert("Your password will not contain special characters.");
    youDidIt();
  } else {
    console.log("help");
    alert("Your answer must be Y for Yes or N for No!");
    includeSpecialChars();
  }
 }

 function youDidIt() {
  alert("You did it! YAAY");
  console.log(passwordLength,hasLowercase,hasUppercase,hasNumbers,hasSpecialChars);
 }
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);