'use strict';

const Node = require('./node.js');

module.exports = class Stack {
  constuctor(){
    this.top = null; 
  }

  push(val){
    if(val === undefined){
      return -1;
    }
    let node = new Node(val);

    if(!this.top) {
      this.top = node;
    }else {
      node.next = this.top;
      this.top = node;
    }


  }
  pop(){
    if(!this.top === null){
      return -1;
    }

    let tempTop = this.top;
    this.top = tempTop.next;
    tempTop.next = null;
    return tempTop.data;
  }

  peek(){
    if(!this.top){
      return -1;
    } else{
      return this.top.data
    }
  }


};
