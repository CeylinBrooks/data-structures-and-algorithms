'use strict';

const tree = require('./binaryTree.js');

describe('Find the max value in binary search tree', () => {

  it('Max value found sucessfully', () => {
    const rootTree = new tree();
    [50,1,2,10,40].forEach(num => rootTree.add(num));

    let rootTreeTest = rootTree.findMaxValue(rootTree.root);

    expect(rootTreeTest.value).toEqual(50);
  });
it('sucessfully found the max value:', () => {
  const expectedTree = new tree();
  [30,1,2,40,10,50].forEach(num => expectedTree.add(num));

  let expectedTreeTest = expectedTree.findMaxValue(expectedTree,.root);

  expect(expectedTreeTest.value).toEqual(50);
});

it('sucessfully found the the max value:', () => {
  const rightTree = new tree();
  [30,1,2,40,10]. forEach(num => rightTree.add(num));

  let rightTreeTest = rightTree.findMaxValue(rightTree.root);

  expect(rightTreetest.value).toEqual(40);
});

it('Error: root is empty (failure)', () => {
  const failTree = new tree();
  let failTreeTest = failTree.findMaxValue(failTree.root);

  expect(failTreeTest).toEqual('Error: root is empty!')
});

});