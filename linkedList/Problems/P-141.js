//Find if a linked list is cyclic or not 
function isCyclic(head){
let visited=[];
let curr=head;
while(curr){
    if(visited.includes(curr.next)){
        return true
    }
    visited.push(curr);
    curr=curr.next;
}
return false;
}

//This technique uses two pointers which means if two pointers are equal to some point then it is cyclic as one pointer is twice faster than the other
var hasCycle = function(head) {
    if(head==null){
        return false;
    }
   let slow=head;
    let fast=head.next;
    while(slow!=fast){
        if(fast===null || fast.next===null){
            return false
        }
        slow=slow.next;
        fast=fast.next.next;
               
        
    }
    return true;
    
};