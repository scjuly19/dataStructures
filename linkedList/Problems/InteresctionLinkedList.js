/**
 Problem: Given the heads of two singly linked-lists headA and headB,
  return the node at which the two lists intersect.
  If the two linked lists have no intersection at all, return null.
  a--->c<------b
 */
/**
 Solution:We take two pointers for both the lists, if one list reaches the end then
 we point it to the head of another list, this way at some point, both pointers
 will point to the intersecting node
 */
 function findIntersect(headA,headB){
     if(headA==null || headB==null) return null;
     let pntr1=headA;
     let pntr2=headB;
     while(pntr1!==pntr2){
         if(pntr1===null){
             pntr1=headB;
         }
         else{
             pntr1=pntr1.next;
         }
         if(pntr2==null){
             pntr2=headA;
         }
         else{
             pntr2=pntr2.next;
         }
     }
     return pntr1

 }