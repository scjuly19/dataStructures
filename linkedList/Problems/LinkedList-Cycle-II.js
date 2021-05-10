/*
Problem:Find out if the linkedlist is cyclic and if yes then
return the node where the cycle begins.
*/ 
//Intersection helper gives us the node that links back to the list
function detectCycle(head){
    if(!head) return null;
    let intersection=detectCycleHelper(head);
    if (!intersection) return null;

    while(head!=intersection){
        head=head.next;
        intersection=intersection.next;
    }
    return head;
}
function detectCycleHelper(head){
    let slow=head;
    let fast=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast) return slow;

    }
    return null;
}
