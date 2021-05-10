class Stack {
  constructor() {
    this.list = [];
    this.top = -1;
  }

  push(element) {
    this.list.push(element);
  }
  pop() {
    if (this.list.length == 0) {
      console.log("Underflow");
    }
    this.list.pop();
    
  }
  peek() {
    if (this.list.length == 0) {
      console.log("Can't peek an empty stack");
    } else {
      console.log(this.list[this.list.length-1]);
    }
  }
  IsEmpty() {
    if (this.list.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(element) {
    var node = new Node(element);
    node.element = element;
    node.next = this.top;
    this.top = node;
    this.size++;
  }
  pop() {
    if (this.top == null) {
      console.log("No element to pop");
    } else {
      this.top = this.top.next;
      this.size--;
    }
  }
  peek() {
    if (this.top == null) {
      console.log("No element to peek");
    } else {
      console.log(this.top.element);
    }
  }
  IsEmpty() {
    if (this.top == null) {
      return true;
    } else {
      return false;
    }
  }
}

//Reverse a string using stack

function reverse(str, n) {
  const stack = new StackLinkedList();
  for (let i = 0; i < n; i++) {
    stack.push(str[i]);
  }
  for (let i = 0; i < n; i++) {
    str[i] = stack.peek();
    stack.pop();
  }
}
// const name="sakshi";
// reverse(name,name.length);

//Check balanced expression using stack
function arePair(opening,closing){
  if(opening=="("&& closing==")") return true;
  else if(opening=="{"&& closing=="}") return true;
  else if(opening=="["&& closing=="]") return true;

    return false;
  
}
function checkBalanced(exp) {
  var n = exp.length;
  var arr=[];

  for (let i = 0; i < n; i++) {
    if (exp[i] == "(" || exp[i] == "{" || exp[i] == "[") {
      arr.push(exp[i]);
    } else if (exp[i] == ")" || exp[i] == "}" || exp[i] == "]") {
      if (
        arr.length==0||
        !arePair(arr[arr.length-1],exp[i])
      ) {
        return false;
      } else {
        arr.pop();
      }
    }
  }
  return arr.length==0 ? true : false;
}
const stack= new Stack();
stack.push(2);
stack.push(3);
stack.IsEmpty();
checkBalanced('())')
