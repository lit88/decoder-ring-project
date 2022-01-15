// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    if (encode === false && input.replace(" ",'').length % 2 !== 0){
      return false
    }
    const lowerCaseInput = input.toLowerCase()
    const polybiusSquare = [
      {letter: "a",
        code: "11"},
      {letter: "b",
        code: "21"},
      {letter: "c",
        code: "31"},
      {letter: "d",
        code: "41"},
      {letter: "e",
        code: "51"},
      {letter: "f",
        code: "12"},
      {letter: "g",
        code: "22"},
      {letter: "h",
        code: "32"},
      {letter: "i",
        code: "42"},
      {letter: "j",
        code: "42"},
      {letter: "k",
        code: "52"},
      {letter: "l",
        code: "13"},
      {letter: "m",
        code: "23"},
      {letter: "n",
        code: "33"},
      {letter: "o",
        code: "43"},
      {letter: "p",
        code: "53"},
      {letter: "q",
        code: "14"},
      {letter: "r",
        code: "24"},
      {letter: "s",
        code: "34"},
      {letter: "t",
        code: "44"},
      {letter: "u",
        code: "54"},
      {letter: "v",
        code: "15"},
      {letter: "w",
        code: "25"},
      {letter: "x",
        code: "35"},
      {letter: "y",
        code: "45"},
      {letter: "z",
        code: "55"},
      {letter: " ",
        code: " "}
    ];

    const encodedInput = [];

    if(encode === true){
    for (let i = 0; i < lowerCaseInput.length; i++){
      polybiusSquare.find((char)=> {
        if(char.letter === lowerCaseInput[i]){
          encodedInput.push(char.code)
        }
      })
    }}

    if(encode === false){
      for(let i = 0; i < input.length; i+=2){
        if (input[i] == " "){
          encodedInput.push(" ")
          i -= 1
        }
        polybiusSquare.find((num)=> {
          if ((input[i] + input[i+1]) === num.code && input[i] !== " "){
            encodedInput.push(num.letter)
          }          
        })        
      }
    }
    
    
    return encodedInput.join('').toString()

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
