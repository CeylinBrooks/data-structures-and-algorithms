'use strict';

const { root } = require("cheerio");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  add(value) {
    const newNodes = new Node(value);

    if (!value) {
      throw new Error('cannot valiadate a value of null');
    }

    if (!this.root) {
      this.root = newNodes;
      return;
    }

    let current = this.root;

    while (true) {
      if (newNodes.value > current.value) {
        if (!current.right) {
          current.right = newNodes;
          return;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNodes;
          return;
        }
        current = current.left;
      }
    }
  }

  findMaximumValue(root) {
    if (root === null) {
      return '404: There are no roots';
    }

    let current = root;
    let runner = null;

    if (current.right) {
      runner = current.right;
    } else if (current.left) {
      runner = current.left;
    }

    let runningFast = true;
    while (runningFast) {
      if (runner.right) {
        current = runner;
        runner = runner.right;
      } else if (runner.left) {
        current = runner;
        runner = runner.left;
      } else {
        runningFast = false;
      }
    }
    if (runner.value > root.value && runner.value < root.right.value) {
      return root.right;
    } else if (runner.value > root.value && runner.value >= root.right.value) {
      return runner;
    } else {
      return root;
    }
  }
}

module.exports = BinarySearchTree;

