/**
 * Problem: Return a linked list with all the nodes at odd indices first and then all the nodes at even indices.
 * Solution: We create two different lists, one for odd and other for even.
 * Odd will start from head because we start from i=1;
 * Even will start from head.next;
 * And then we will run a while loop till even && even.next exists
 * First we point our odd.next=even.next because every index after even is odd
 * then we make odd=odd.next
 * And similar for even
 * After coming out of the while loop
 * we will point odd.next=evenhead i.e join the two lists
 * and finally return head;
 */

 function oddEven(head){
     if(head===null) return null;
     let odd=head;
     let even=head.next;
     let evenHead=even;
     while(even && even.next){
         odd.next=even.next;
         odd=odd.next;
         even.next=odd.next;
         even=even.next;

     }
     odd.next=evenHead;
     return head;
 }
