var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
var numeric = ['1','2','3','4','5','6','7','8','9','0']; 
var specialChar = ['!','@','#','$','%','&','(',')','*','+','-','.','/',':',';','<','>','?'];

var selectedTypes = [];
console.log(selectedTypes);

//Set up inputs for password criteria and return them as an array. 
function passCriteria() {
  var numChars = window.prompt("How long would you like your password to be?");
  inputValidator(numChars); 
  
  var inclLower = window.confirm("Include lowercase characters?");
  var inclUpper = window.confirm("Include uppercase characters?");
  var inclNum = window.confirm("Include numbers?");
  var inclSpecial = window.confirm("Do you want special characters?");

  if(inclLower){
    selectedTypes.push(lowerCase);
    console.log(lowerCase);
  } 
  if(inclUpper){
    selectedTypes.push(upperCase); 
    console.log(upperCase);
  }
  if(inclNum){
    selectedTypes.push(numeric); 
  }
  if (inclSpecial){
    selectedTypes.push(specialChar); 
  }
  return(numChars);
}

//Input validation
function inputValidator(numChars) {
  if((numChars == parseInt(numChars)) && (numChars > 7 && numChars < 129)){
    return(parseInt(numChars)); 
  } else {
    window.alert("Valid numeric character not entered. Value must be greater than 7 and less than 29 characters.");
    inputValidator(window.prompt("Reenter the number of characters in the password: "));
  }
}

//Generate random values and pick from one of each applicable array
function genChar(numChars) {
  var finalString = ''; 

  for (i=0; i < numChars; i++) {
    //Potential issue 1
    finalString.push(selectedTypes[Math.floor(Math.random() * selectedTypes.length)]);
  } 
  console.log(finalString);
  return finalString; 
}

//Return final concatenated string 
//Potential issue 2
function generatePassword() {
  var passLength = passCriteria();
  console.log(passLength);
  var finalPass = genChar(passLength);
  return finalPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);