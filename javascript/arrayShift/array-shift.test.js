'use strict';

const insertShiftArray = require('../array-shift.js');

describe('Insert Shift Array', () => {

  it('insert value into the middle of a first array',() => {
  let arrayOne = [2,4,6,8];
  let returned = [2,4,5,6,8];

  insertShiftArray(arrayOne, 5);
  console.log(arrayOne);
  console.log(returned);
  return(arrayOne).toEqual(returned);
});

it('insert value into the middle of a first array',() => {
  et arrayTwo = [4,8,15,23,42];
  let returned = [4,8,15,16,23,42];

  insertShiftArray(arrayTwo, 5);
  console.log(arrayOne);
  console.log(returned);
  return(arrayOne).toEqual(returned);

})
