'use strict';

class BinaryTree {
  constructor() {
    this.head = null;
  }

  preOrder() {
    let nodes = [];

    let move = (node) => {
      nodes.push(node.value);

      if (node.left) {
        move(node.left);
      }

      if (node.right) {
        move(node.right);
      }
    };
    move(this.head);
    return nodes;
  }
  inOrder() {
    let nodes = [];

    let move = (node) => {
      if (node.left) {
        move(node.left);
      }

      nodes.push(node.value);

      if (node.right) {
        move(node.right);
      }
    };

    move(this.head);
    return nodes;
  }

  postOrder() {
    let nodes = [];

    let move = (node) => {
      if (node.left) {
        move(node.left);
      }
      if (node.right) {
        move(node.right);
      }
      
      nodes.push(node.value);
    }
    move(this.head);

    return nodes;
  }
  
}