// Assignment code here
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
  var lowercase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
  var uppercase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',]
  var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '~', '?']


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


// Write function that get user input on password length, which characters to use
function userprompt() {
  var passwordLength = prompt("How long do you want your password to be?")
    if (passwordLength < 8){
      alert("Password must be at least 8 characters")
      return;
    }
    if (passwordLength >128) {
      alert("Password must be less than 128 characters")
      return;
    }
  var confirmNumbers = confirm("Would you like numbers in your password?")

  var confirmLowercase = confirm("Would you like lowercase letters in your password?")

  var confirmUppercase = confirm("Would you like uppercase letters in your password?")

  var confirmSymbols = confirm("Would you like symbols in your password?")


  // object - left side of colon is the key, right side is value passed to it based on prompts^
  var userAnswers = {    
    chooseNumbers: confirmNumbers,
    chooseLowercase: confirmLowercase,  
    chooseUppercase: confirmUppercase,
    chooseSymbols: confirmSymbols,
    chooseLength: passwordLength,
  }
  console.log(userAnswers)

  return userAnswers
}
// Write function to randomize any arrays | array methods: .push .concat .join
function randomizeArray(array) {
  var grabRandomIndex = Math.floor(Math.random()*array.length)
  var indexValue = array [grabRandomIndex]
  return indexValue
}
console.log(randomizeArray(symbols))
// Write generate password function that creates random password based on user input, returns string of that random password
function generatePassword() {
  var userAnswers = userprompt()
  var characterPool = []
  var newPassword = []
  
  if (userAnswers.chooseLowercase === true){
    characterPool = characterPool.concat(lowercase)
    characterPool.push (randomizeArray(lowercase))
  }
  if (userAnswers.chooseSymbols === true){
    characterPool = characterPool.concat(symbols)
    characterPool.push (randomizeArray(symbols))
  }

  if (userAnswers.chooseUppercase === true) {
    characterPool = characterPool.concat(lowercase)
    characterPool.push (randomizeArray(uppercase))
  }

  // if (userAnswers.chooseLength >= 8){
  //   newPassword = characterPool
  //   newPassword.push (randomizeArray)
  // }

  for (var i=0 ; i<userAnswers.chooseLength; i++) {
    newPassword.push(randomizeArray(characterPool))
  }
  console.log(newPassword)
  return newPassword.join("")
}

