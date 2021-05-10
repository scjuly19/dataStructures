/**
 * Problem:Delete the node with given value and the values can be repeating like [3,3,3,3]
 Solution: We see if the value is repeated, then we keep on changing our head=head.next until it 
 becomes null.
 Else we start from head and check if curr node has the value, then curr.next=curr.next.next
 else curr=curr.next;
 */

 function deleteNode(head,val){
     if(head===null) return null;
     //This checks whether head is the value and if its repetitive we keep on going till we have the value on head which will be the case for repetition
     while(head){
         if(head.val==val){
             head=head.next;
         }
         else{
             break;
         }
     }
     let curr=head;
     while(curr&&curr.next){
         if(curr.next.val==val){
             curr.next=curr.next.next
         }
         else{
             curr=curr.next
         }
     }
     return head;
 }