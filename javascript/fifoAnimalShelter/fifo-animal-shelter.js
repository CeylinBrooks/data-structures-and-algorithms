'use strict':

class Node{
  constructor(val){
    this.animal = val;
    this.next = null;
  }
}

class AnimalShelter {
  constructor(animal){
    let newAnimal = new Node(animal);

    if(!this.top && this.bottom){
      this.top = newAnimal;
      this.bottom = newAnimal;
      return;
    }
    this.bottom.next = newAnimal;
    this.bottom = newAnimal;
  }

  dequeue(choice){
    if(!pref) return null;

    if(!this.top && !this.bottom) return console.log('List is Empty');

    if(this.top.animal === choice){
      let dequeueNode = this.top;
      this.front = this.top.next;
      dequeueNode.next = null;
      return dequeueNode;
    }

    let currentNode = this.top;
    let nextNode = this.top.next;
    let previousNode = null;

    while (currentNode.next !== null && currentNode.animal !== choice){
      previousNode = currentNode;
      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }

    if(currentNode.animal === choice){
      previousNode.next = nextNode;
      currentNode.next = null;
      return currentNode;
    }

  }
}

module.exports = AnimalShelter;