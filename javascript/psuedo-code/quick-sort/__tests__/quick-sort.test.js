'use strict';

const quickSort = require('../../quick-sort');

describe('--Test for sort', () => {
  it ('should sort the array from right to left', () => {
    let inputArray = [1,6,17,89,15,23];
    let test = quickSort(inputArray);

    expect(test).toEqual([1,6,15,17,23,89]);
  });
  
})