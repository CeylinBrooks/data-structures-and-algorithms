'use strict';

class Stack {
  constructor() {
    this.top = null; 
    this.storage = [];
  }

  push(item){
    this.storage.push(item);
    this.top = item;
    return this;
  }

  pop(){
    if(this.isEmpty() === false){
      return null;
    }

    let item = this.storage.pop();
    this.top = !this.storage.length ? null : this.storage[this.storage.length - 1];
    return item;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top ? true : false;
  }
}

module.exports = Stack;