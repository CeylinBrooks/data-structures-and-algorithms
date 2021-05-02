'use strict';

const Stack = require('../stack.js');

describe('Stacks data structure', () => {

  let stack = new Stack();
  stack.push(444).push(555).push(888);

  it('should push onto a stack', () => {
    expect(stack.top).toBe(888);
  });

  it('should push multiple items into the stack', () => {
    expect(stack.storage.length).toBe(8);
  });

  it('shoud pop an item off the stack', () => {
    stack.pop();
    expect(stack.storage.length).toBe(5);
  });

  it('should peek at the upcoming item in the stack', () => {
    expect(stack.peek()).toBe(555);
  });

  it('should empty a stack after a couple pops', () => {
    stack.pop().pop();
    expect(stack.top).toBe(null);
  });

  it('should instantiate an empty stack', () => {
    let newStack = new Stack();
    expect(newStack.top).toBe(null);
  });

  it('if no pop or peek an exception is rasied', () => {
    except(stack.pop()).toBe(null);
    except(stack.peek()).toBe(null);
  });


});