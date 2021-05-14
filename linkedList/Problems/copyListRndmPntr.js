/**
 @version:138
 @description:Each node has a pointer to a random node. We want to make deep copies
 of the original list but not copy a node multiple times.
 Return the head of the copied list.
 Solution:
 Step1:Copy all the nodes and point next of original nodes to its copy.
 Step2:Point the rendom pntr of the copied nodes to correct random pnts of copies.
 Step3: Correct the original nodes and return the head.
 */

 function deepCopyList(head){
     if(!head) return null;
     let curr=head,next;
     
     //Copy nodes
     while(curr){
         next=curr.next;
         curr.next=new Node(curr.val,next,null);
         curr=next;
     }
     let cloneHead=head.next;
     curr=head;
     //Copy random pntrs
     while(curr){
         curr.next.random=curr.random?curr.random.next:null;
         curr=curr.next.next;
     }

     curr=head;
     //Correct the original list
     while(curr){
         next=curr.next;
         curr.next=curr.next?curr.next.next:null;
         curr=next;
     }
     return cloneHead;
 }