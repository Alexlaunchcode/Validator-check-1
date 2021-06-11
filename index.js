const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

let isVowel = function(letter) {
  for (i = 0; i<5; i++){
    let vowels = ["a", "e", "i", "o", "u"]
    if (letter.charAt(0) === vowels[i])
    
    return true;
    else return false
  }
  //return false
};

console.log(getValidInput('Enter text that starts with a: ', isVowel));

// TODO 1: write a validator 
// that ensures input starts with "a"

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code! 