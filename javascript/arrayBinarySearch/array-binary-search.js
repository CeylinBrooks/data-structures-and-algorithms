'use strict';

const values = [4, 8 , 15, 16, 23, 42]

// const binarySearch = (val, arr) => {
//   for (let i = 0; i < arr.length; i ++){

//     if (val === arr[i]){
//       return i;
//     }
//   }
//   return -1;

// };

const values = (val, arr) => {
  let smaller = 0;
  let larger = arr.length - 1;

  while (smaller <= larger) {
    const middle = smaller + Math.floor((larger - smaller) / 2);

    if (val < arr [middle]) {
      upper = middle -1;
    }else {
      smaller = middle + 1; 
    }
  }
  return -1;
}