//global variables
var generateBtn = document.querySelector("#generate");
var passwordLength;
var hasLowercase;
var hasUppercase;
var hasNumbers;
var hasSpecialChars;

//asks user to select password length, stores length as number
function writePassword() {
  var confirmPasswordLength = prompt("How many characters would you like your password to be?");
  if (confirmPasswordLength === null) {
    return;
  } else if ((confirmPasswordLength < 8) || (confirmPasswordLength > 128)) {
    alert("Try a number between 8 and 128!");
    console.log(confirmPasswordLength);
    writePassword();
  } else {
    passwordLength = confirmPasswordLength;
    alert("Your password length is: " + passwordLength + " characters.");
    includeLowercase();
  }
}

//asks user if they want to include lowercase characters, stores answer as boolean
function includeLowercase() {
  var confirmLowercase = prompt("Do you want to include lowercase letters in your password? \nType Y for Yes or N for No");
  
  if (confirmLowercase === null) {
    return;
  } else if (confirmLowercase.toUpperCase() === "Y") {
    hasLowercase = true;
    alert("Your password will contain lowercase letters.");
    includeUppercase();
  } else if (confirmLowercase.toUpperCase() === "N") {
    hasLowercase = false;
    alert("Your password will not contain lowercase letters.");
    includeUppercase();
  } else {
    alert("Your answer must be Y for Yes or N for No!");
    includeLowercase();
  }
}

//asks user if they want to include uppercase characters, stores answer as boolean
function includeUppercase() {
  var confirmUppercase = prompt("Do you want to include uppercase letters in your password? \nType Y for Yes or N for No");
 
  if (confirmUppercase === null) {
    return;
  } else if (confirmUppercase.toUpperCase() === "Y") {
    hasUppercase = true;
    alert("Your password will contain uppercase letters.");
    includeNumbers();
  } else if (confirmUppercase.toUpperCase() === "N") {
    hasUppercase = false;
    alert("Your password will not contain uppercase letters.");
    includeNumbers();
  } else {
    alert("Your answer must be Y for Yes or N for No!");
    includeUppercase();
  }
}

//asks user if they want to include numbers, stores answer as boolean
 function includeNumbers() {
  var confirmNumbers = prompt("Do you want to include numbers in your password? \nType Y for Yes or N for No");
  
  if (confirmNumbers === null) {
    return;
  } else if (confirmNumbers.toUpperCase() === "Y") {
    hasNumbers = true;
    alert("Your password will contain numbers.");
    includeSpecialChars();
  } else if (confirmNumbers.toUpperCase() === "N") {
    hasNumbers = false;
    alert("Your password will not contain numbers.");
    includeSpecialChars();
  } else {
    alert("Your answer must be Y for Yes or N for No!");
    includeNumbers();
  }
 }

 //asks user if they want to include special characters, stores answer as boolean
 function includeSpecialChars() {
  var confirmChars = prompt("Do you want to include special characters in your password? \nType Y for Yes or N for No");
  
  if (confirmChars === null) {
    return;
  } else if (confirmChars.toUpperCase() === "Y") {
    hasSpecialChars = true;
    alert("Your password will contain special characters.");
    generatePassword();
  } else if (confirmChars.toUpperCase() === "N") {
    hasSpecialChars = false;
    //sends the user back to includeLowercase if they have not selected one of the character types
    if ((hasLowercase === false) && (hasUppercase === false) && (hasNumbers === false) && (hasSpecialChars === false)) {
      alert("Please select at least one of the character types!");
      includeLowercase();
    } else {
      alert("Your password will not contain special characters.");
      generatePassword();
    }
  } else {
    alert("Your answer must be Y for Yes or N for No!");
    includeSpecialChars();
  }
 }

 //generates password based on user's answers
 function generatePassword() {

  //creates variables for each password character and the whole password and sets them as strings
  var passwordChar = "";
  var password = "";

  //arrays of each character type
  var totalArray = [];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "?", ".", "<", ">", "-", "_", "=", "+"];
  
// checks which character types the user selected and adds selected characters to totalArray
  if (hasLowercase === true) {
    totalArray = lowercaseArray.concat(totalArray);
  }
  if (hasUppercase === true) {
    totalArray = uppercaseArray.concat(totalArray);
  }
  if (hasNumbers === true) {
    totalArray = numberArray.concat(totalArray);
  }
  if (hasSpecialChars === true) {
    totalArray = specialArray.concat(totalArray);
  }
  console.log(totalArray);

  //randomizes each character based on user selections
  for (var i = 0; i < passwordLength; i++) {
    randomChar = Math.floor(Math.random() * totalArray.length); 
    passwordChar = totalArray[randomChar]

    // Write password to the #password input
    var password = passwordChar.concat(password);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
 
  alert("Your custom password has been generated.");
  console.log(password)
  console.log(passwordLength,hasLowercase,hasUppercase,hasNumbers,hasSpecialChars);
 }
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);