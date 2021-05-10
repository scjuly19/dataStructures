class Node{
    constructor(e){
        this.element=e;
        this.prev=null;
        this.next=null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    insertAtHead(e){
        var node= new Node(e);
        if(this.head==null){
            this.head=node;
        }
        this.head.prev=node;
        node.next=this.head;
        this.head=node;
        this.size++;
        return this.head;
    }
    insertAtTail(e){
        var node=new Node(e);
        if(this.head==null){
        this.head=node;
        }
        else{
            var curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=node;
            node.prev=curr;
            node.next=null;
            this.size++;
            return node;
        }
    }
    
  
 
}
var list=new DoublyLinkedList();
list.insertAtHead(2);
list.insertAtHead(4);
list.insertAtHead(5);
