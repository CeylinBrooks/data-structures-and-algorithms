'use strict';

function multiBracketValidation(input) {
  let round = {
    open: 0,
    close: 0,
  };

  let sqaure = {
    open: 0,
    close: 0,
  };

  let curly = {
    open: 0,
    close: 0,
  };

  if (input[0] === ")" || input[0] === "]" || input[0] === "}") {
    return false;
  }

  for (let i = 0; i < input.length; i++) {
    if (
      round.close > round.open ||
      curly.close > curly.open ||
      sqaure.close > sqaure.open
    ) {
      return false;
    }
    if (input [i] === "(") {
      round.open++;
    }
    if (input[i] === ")") {
      round.close++;
    }
    if (input[i] === "[") {
      sqaure.open++;
    }
    if (input[i] === "]") {
      sqaure.close++;
    }
    if (input[i] === "{") {
      curly.open++;
    }
    if(input[i] === "}") {
      curly.close++;
    }
  }

  if ( 
    round.open === round.close &&
    sqaure.open === sqaure.close &&
    curly.open === curly.close
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = multiBracketValidation;

console.log(multiBracketValidation("{{{}}}"));
console.log(multiBracketValidation("{{}}}}()()"));
console.log(multiBracketValidation("()()()"));