/**
 * @description Delete the nth node from end of a linked list and return its head.
 * @solution We create a dummy node and point its next pointer to head. And then we 
 * take 2 pointers that start from dummyNode and the fast pointer keeps on going till n+1.
 * Then the slow pointer starts and keeps on going till fast is null. And when fast is null
 * slow pointer be just before the node to be deleted. Then we just point slow.next=slow.next.next
 */


 function deleteFromEnd(head,n){
     if(head==null){
         return false;
     }
     let dummyNode=new ListNode(0);
     dummyNode.next=head;
     let slow=dummyNode;
     let fast=dummyNode;
     for(let i=1;i<=n+1;i++){
         fast=fast.next;
     }
     while(fast!=null){
         slow=slow.next;
         fast=fast.next;
     }
     slow.next=slow.next.next;
     return dummyNode.next;
 }