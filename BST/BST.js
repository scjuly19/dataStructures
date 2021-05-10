//Binary Search Tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  //Creates a new node if root is empty
  insert(data) {
    var node = new Node(data);
    if (this.root == null) {
      this.root = node;
    } else this.insertNode(this.root, node);
  }
  //inserts a new node appropriately

  insertNode(node, newNode) {
    if (newNode.data > node.data) {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
  }

  levelTraverse() {
    let visited = [];
    let queue = [];
    let current = this.root;
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      visited.push(current.data);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    console.log(visited);
    return visited;
  }

  Inorder(root) {
    if (root == null) return;
    this.Inorder(root.left);
    console.log(root.data);
    this.Inorder(root.right);
  }
  PreOrder(root) {
    if (root == null) return;
    console.log(root.data);
    this.PreOrder(root.left);
    this.PreOrder(root.right);
  }
  PostOrder(root) {
    if (root == null) return;
    this.PostOrder(root.left);
    this.PostOrder(root.right);
    console.log(root.data);
  }
  isBST(root, minVal, maxVal) {
    if (root == null) return true;
    if (
      (maxVal !== null && root.data > maxVal) ||
      (minVal !== null && root.data < minVal)
    ) {
      return false;
    }
    if (
      this.isBST(root.left, minVal, root.data) &&
      this.isBST(root.right, root.data, maxVal)
    ) {
      console.log("Yes its BST");

      return true;
    }
    console.log("nope not a BST");
    return false;
  }
  getMin(node){
      if(node==null) return false;
      let temp=node.left;
      while(temp.left!=null){
          temp=temp.left
      }
      return temp.data
  }
  getMax(node){
    if(node==null) return false;
    let temp=node.right;
    while(temp.right){
      temp=temp.right;
    }
    return temp.data
  }
  delete(root, data) {
    if (root == null) return root;
    if (data < root.data) root.left = this.delete(root.left, data);
    if (data > root.data) root.right = this.delete(root.right, data);
    else {
      //CASE 1:No Children
      if (root.left == null && root.right == null) {
        root = null;
      }
      // Case 2:When only one children
      else if (root.left == null) {
        let temp = root;
        root = root.right;
        return temp;
      } else if (root.right == null) {
        let temp = root;
        root = root.left;
        return temp;
      }
      //Case 3:Both the children
      else {
        let temp = this.getMin(root.right);
        root.data = temp.data;
        root.right = this.delete(root.right, temp.data);
      }
      return root;
    }
  }
  search(data,root){
      if(root==null || root.data==data) return root;
      if(data>root.data) return this.search(data,root.right);
      if(data<root.data) return this.search(data,root.left)
  }
}

var bst = new BST(8);
bst.insert(3);
bst.insert(1);
bst.insert(6);
bst.insert(10);
bst.insert(40);
console.log(bst.search(3,bst.root))
