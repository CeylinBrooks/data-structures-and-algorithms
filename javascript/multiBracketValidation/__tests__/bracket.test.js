'use strict';

const multiBracketValidation = require("../multi-bracket-validation.js");

describe('bracket validator', () => {
  it('should return true if string is valid', () => {
    let stringValidator = "(({[]}))";
    expect(multiBracketValidation(stringValidator)).toBe(true);
  });
  it('should return false if string is not valid', () => {
    let stringValidator = "(({[])";
    expect(multiBracketValidation(stringValidator)).toBe(false);
  });
});