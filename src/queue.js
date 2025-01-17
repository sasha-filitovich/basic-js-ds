const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(x) {
    this.queue = {
      value: x,
      next: null,
    };
  }
  getUnderlyingList() {
    return this.queue;
  }
  enqueue(value) {
    if (this.queue.value === undefined) {
      this.queue.value = value;
    } else {
      let current = this.queue;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = { value: value, next: null };
      //current.next.value = value;
    }
  }
  dequeue() {
    const head = this.queue.value;
    this.queue = this.queue.next;
    return head;
  }
}

module.exports = {
  Queue,
};
