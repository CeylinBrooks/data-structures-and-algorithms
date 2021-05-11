'use strict';

const Node = require('../node');
const breadthFirst = require('../breadthFirst.js');
const { root } = require('cheerio');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

describe('test', () => {
  it('should successfully traverse the binary tree', () => {
    const rootTree = new Node(3);
    const rootTreeLeft = new Node(4);
    const rootTreeLeft1 = new Node(29);
    const rootTreeLeft2 = new Node(19);
    const rootTreeRight = new Node(6);
    const rootTreeRight1 = new Node(8);
    const rootTreeRight2 = new Node(4);

    rootTree.left = rootTreeLeft;
    rootTreeLeft.left = rootTreeLeft1;
    rootTreeLeft.right = rootTreeLeft2;

    rootTree.right = rootTreeRight;
    rootTreeRight.left = rootTreeRight1;
    rootTreeRight.right = rootTreeRight2;

    const tree = new BinaryTree(rootTree);
    const test = breadthFirst(tree.root, []);

    expect(test).toEqual([3,4,29,19,6,8,4]);


  });
});




