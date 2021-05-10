
class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
class Stack{
    constructor(){
        this.top=null;
        this.size=0;
    }
    push(element){
        var node=new Node(element);
        node.element=element;
        node.next=this.top;
        this.top=node;
        this.size++;
    }
    pop(){
        if(this.top==null){
            console.log("No element to pop")
        }
        else{
            this.top=this.top.next;
            this.size--;
        }
    }
    peek(){
        if(this.top==null){
            console.log("No element to peek")
        }
        else{
            console.log(this.top.element);
        }
    }
    IsEmpty(){
        if(this.top==null){
           return true;
        }
        else{
          return false
        }
    }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element);
    var curr = this.head;
    if (this.head == null) {
      this.head = node;
    } else {
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    var node = new Node(element);
    if (index > 0 && index > this.size) {
      return false;
    } else {
      var curr,
        prev,
        i = 0;
      curr = this.head;
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        while (i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = node;
        node.next = curr;
      }
      this.size++;
    }
  }
  removeElement(element) {
    var curr = this.head;
    var prev = null;
    while (curr !== null) {
      if (curr.element == element) {
        if (prev == null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.element;
      }
      prev = curr;
      curr = curr.next;
    }
    return -1;
  }

  printList() {
    var curr = this.head;
    var arr = [];
    while (curr) {
      arr.push(curr.element);
      curr = curr.next;
    }
    console.log(arr);
  }
  printRecursion(p) {
    if (p == null) return;
    console.log(p.element);
    this.printRecursion(p.next);
  }
  reverseList() {
    var curr, prev, next;
    curr = this.head;
    prev = null;
    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return this.head;
  }
  printReverse(p) {
    if (p == null) return;
    this.printReverse(p.next);

    console.log(p.element);
  }
  ReverseRecursion(p) {
    if (p.next == null) {
      this.head = p;
      return;
    }
    this.ReverseRecursion(p.next);
    var q;
    q = p.next;
    q.next = p;
    p.next = null;
  }
  removeFrom(index) {
    if (index > 0 && index > this.size) {
      return false;
    } else {
      var curr,
        prev,
        i = 0;
      curr = this.head;
      if (index == 0) {
        this.head = curr.next;
      } else {
        while (i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.size--;
      return curr.element;
    }
  }
  reverseWithStack(head) {
    if(head==null) return;
    const stack = new Stack();
    var temp = head;
    while (temp.next != null) {
      stack.push(temp);
      temp = temp.next;
    }
   
    head = temp;
    
    while (!stack.IsEmpty()) {
      temp.next = stack.peek();
      temp = temp.next;
      stack.pop();
    }
    temp.next = null;
    return head;
  }
}
var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

// list.printRecursion(list.head);n
// list.printReverse(list.head)
// list.ReverseRecursion(list.head);
// list.printList();


list.printList();
