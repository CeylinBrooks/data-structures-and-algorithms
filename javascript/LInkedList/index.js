'use strict';

let LinkedList= require('./linked-lists.js');

let newList = new LinkedList();

newList.insert(1);
newList.insert(2);
newList.insert(3);

let inList = newList.includes(3);

let nodeString = newList.toString();

console.log('List ===>', newList);
console.log('Includes ===>', inList);
console.log('String ===>', nodeString);
