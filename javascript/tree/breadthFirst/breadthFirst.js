'use strict';

const breadthFirst = (root, arr) => {
  if (!root){
    return 'The root is empty!';
  }
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let currentQueue = queue.shift();

    console.log(currentQueue.value);
    arr.push(currentQueue.val);
    if(currentQueue.right) queue.push(currentQueue.right);
    if(currentQueue.right) queue.push(currentQueue.right);
  }
  return arr; 
};

module.exports = breadthFirst;