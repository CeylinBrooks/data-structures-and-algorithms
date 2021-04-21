'use strict';

const middleOfArray = (arr, num) => {
  const array = [];
  const centerOfArray = Math.ceil(arr.length /2);
  for (let i = 0; i < arr.length; i++) {

    if (i === centerOfArray){
      array.push(num);
    }
    array.push(arr[i]);
  }
  return array;
};

module.exports = middleOfArray;