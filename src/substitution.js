// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    
    const alphabetArray = alphabet.split('')
    const filteredArray = alphabetArray.filter((letter, index)=> alphabetArray.indexOf(letter) !== index)
    if (filteredArray.length > 0) return false

    const lowerCaseInput = input.toLowerCase();

    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz";

    const encodedInput = [];

    for (let i = 0; i < lowerCaseInput.length; i++){
      if (lowerCaseInput[i] === " "){
        encodedInput.push(" ")
      }

      for (let j = 0; j < trueAlphabet.length; j++){
        if (encode === true && trueAlphabet[j] === lowerCaseInput[i]){
          encodedInput.push(alphabet[j])
        }
      } 
      
      for (let j = 0; j < alphabet.length; j++){
        if (encode === false && alphabet[j] === lowerCaseInput[i]){
          encodedInput.push(trueAlphabet[j])
        }
      }
    };

    return encodedInput.join('');
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
