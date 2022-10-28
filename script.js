//Arrays of valid characters
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
var numeric = ['1','2','3','4','5','6','7','8','9','0']; 
var specialChar = ['!','@','#','$','%','&','(',')','*','+','-','.','/',':',';','<','>','?'];

//Array for storing selected characters
var selectedTypes = [];

//Prompts the user for the chosen password length and returns that value for validation
//Confirms the types of characters used: lowercase, uppercase, numbers, and/or special characters 
function passCriteria() {
  var numChars = window.prompt("How long would you like your password to be?");
  
  var inclLower = window.confirm("Include lowercase characters?");
  var inclUpper = window.confirm("Include uppercase characters?");
  var inclNum = window.confirm("Include numbers?");
  var inclSpecial = window.confirm("Do you want special characters?");

  if(inclLower){
    selectedTypes = selectedTypes.concat(lowerCase);
  } 
  if(inclUpper){
    selectedTypes = selectedTypes.concat(upperCase);
  }
  if(inclNum){
    selectedTypes = selectedTypes.concat(numeric); 
  }
  if (inclSpecial){
    selectedTypes = selectedTypes.concat(specialChar); 
  }
  console.log(selectedTypes);
  return(numChars);
}

//Confirms whether or not the user entered a valid integer between 7 and 129
//Continues to prompt the user until they enter a valid input
//Returns a valid integer
function inputValidator(numChars) {
  if((numChars == parseInt(numChars)) && (numChars > 7 && numChars < 129)){
    return(parseInt(numChars)); 
  } else {
    window.alert("Valid numeric character not entered. Value must be greater than 7 and less than 29 characters.");
    var reenter = window.prompt("Reenter the number of characters in the password: ");
    return(inputValidator(reenter));
  }
}

//Generates random characters and concatenates them to a string
//Returns the string once the loop has finished
function genChar(numChars) {
  var finalString = ''; 

  for (i=0; i < numChars; i++) {
    finalString = finalString.concat(selectedTypes[Math.floor(Math.random() * selectedTypes.length)]);
  } 
  console.log(finalString);
  return finalString; 
}

//Driver function
//Prompts user for password criteria, validates the amount of characters, generates a suitable password, and returns it.
function generatePassword() {
  var passLength = passCriteria();
  passLength = inputValidator(passLength);
  var finalPass = genChar(passLength);
  return finalPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Reset selectedTypes[] once the password has been generated
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  selectedTypes.length = 0; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);