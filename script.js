// Assignment code here
// prompt section
function charLength() {
  let passLength = prompt(
    "how many characters would you like? ( 8-128 limit ) "
  );
  // Convert passLength into a string
  passLength = parseInt(passLength);
  // Add Min - Max if statment
  if (passLength < 8 || passLength > 128) {
    window.alert("You did not pick a valid option. Try again.");
    charLength();
    console.log("hi");
  }
  // Add if stament for NaN
  else if (Number.isNaN(passLength)) {
    window.alert("You did not pick a valid option. Try again.");
    charLength();
  }
  return passLength;
}

function getPassConstraint() {
  // Call charLength fuction inside getPassConstraint for access
  let passLength = charLength();
  // Confirm for LowerCase
  let lowCase = confirm(
    "would you like to include Lower Case Characters? ( Example: abc ) "
  );
  // Confirm for UpperCase
  let upCase = confirm(
    "would you also like to include Upper Case Characters? ( Example: ABC )"
  );
  // Confirm for Numbers
  let numeric = confirm(
    "How about including some Numerical values? ( Example: 12345 )"
  );
  // Confirm for Special Characters
  let specialChar = confirm(
    "Finally what about adding some special characters? ( Example: ?!@#$% )"
  );
  // Return True or False for all confirms
  return { passLength, lowCase, upCase, numeric, specialChar };
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
