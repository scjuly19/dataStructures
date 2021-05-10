/**
 @description:We are given a doubly linked list with an additonal pointer to its child.
 If there is a child we need to flatten the list and point the next of current node to child and then the next of child to remaining list.
 Similar if the child has its own child.
 @Solution We start from head and check if any child exists. If so and we have a
 next node then we push that onto our stack and then point the next to our child and prev of the child
 to curr node.
 Then we don't need this child as we already pointed to it, we set it to null.
 If we reach the end of node and the stack is not empty then we pop from stack and point
 the next to it and prev of next to curr.
 */

 function flatList(head){
     let curr=head,stack=[];
     while(curr){
         if(curr.child){
             if(curr.next) stack.push(curr.next);
             curr.next=curr.child;
             curr.next.prev=curr;
             curr.child=null;
         }
         if(!curr.next && stack.length!=0){
             curr.next=stack.pop();
             curr.next.prev=curr;
         }
         curr=curr.next
     }
     return head;
 }