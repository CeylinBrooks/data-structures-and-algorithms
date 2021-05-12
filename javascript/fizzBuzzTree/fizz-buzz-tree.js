'use strict';

function fizzBuzzTree(val) {

  function _fizzBuzz(root) {
    if (!root) {
      return;
    }
    if (root.value % 15 === 0) {
      root.value = 'FizzBuzz';
    } else if (root.value % 3 === 0) {
      root.value = 'Fizz';
    } else if (root.value % 5 === 0) {
      root.value = 'Buzz';
    } else {
      root.value = root.value.toString();
    }

    _fizzBuzz(root.left);
    _fizzBuzz(root.right);
  }

  _fizzBuzz(val.root);

}

module.exports = fizzBuzzTree;
