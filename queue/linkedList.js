class Node {
  constructor(e) {
    this.element = e;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(x) {
    var node = new Node(x);
    node.element = x;
    node.next = null;
    if (this.front == this.rear) {
        this.front=node;
      this.rear = node;
     
    }
    this.rear.next = node;
    this.rear = node;
  }
  dequeue() {
    if (this.front == null) {
      return;
    }
    this.front = this.front.next;
    if (this.front == this.rear) {
      this.rear = null;
    }
  }
}

var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
queue.dequeue();
console.log(queue);
