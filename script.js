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
// Password generation section
function generatePassword() {
  const constraints = getPassConstraint();
  const charOptions = [];
  const passwordArray = [];
  // If constraints.lowCase is true then Add to charOptions
  if (constraints.lowCase) {
    //  Lower case option array
    const lowArr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    // Add lower case characters to charOptions
    charOptions.push(...lowArr);
  }
  if (constraints.upCase) {
    const upArray = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    // Add UPPER case characters to charOptions
    charOptions.push(...upArray);
  }
  if (constraints.numeric) {
    const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // Add number characters to charOptions
    charOptions.push(...numArray);
  }
  if (constraints.specialChar) {
    const specialArray = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "+",
      "=",
      "/",
      "?",
      ",",
      ".",
      "<",
      ">",
      "~",
    ];
    // Add special characters to charOptions
    charOptions.push(...specialArray);
  }

  for (i = 0; i < constraints.passLength; i++) {
    // Randomly select characters from charOptions
    const ranChar = charOptions[Math.floor(Math.random() * charOptions.length)];
    //  Push into passwordArray[]
    passwordArray.push(ranChar);
  }
  // Turn password array into one string
  const password = passwordArray.join("");

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
