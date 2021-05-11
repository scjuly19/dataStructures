/**
 @description: Roatate a linked list by k nodes. k can be greater than length of the list.
 Solution: We will take two pntrs, count for list length and curr=head
 1. Traverse through the list and get the length of list.
 2. Then k%count to handle k's value if its greater than length.
 3. Then we traverse again through the list till we get the kth node using one of the pointers.
 4. We will start the traversal again till we reach the last node.
 5. We point the last node's next to head and make the head=pntr 2 which will be one behind the pntr1.
 6. Point the last node to null.
 */

 function rotateList(head,k){
     if(!head) return null;
     let slow=head,fast=head,curr=head,count=0;
     while(curr){
         curr=curr.next;
         count++
     }
     k=k%count;
     for(let i=0;i<k;i++){
         fast=fast.next;
     }
     while(fast.next){
         slow=slow.next;
         fast=fast.next;
     }
     fast.next=head;
     head=slow.next;
     slow.next=null;
     return head;
 }