/**
 * Problem:Check whether a list is palindrome or not.
 * Solution: Take two pointers, slow and fast and iterate through the list.
 * Then the slow will be half way through the list, so we reverse this half
 * and set fast to start of list, i.e head.
 * Then we check if all the values at slow match the fast. If yes then its palindrome
 * else not a palindrome.
 */
function isPalindrome(head){
    if(head==null) return false;
    let slow=head;
    let fast=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    slow=reversedHelper(slow);
    fast=head;
    while(slow!=null){
        if(slow.val!=fast.val){
            return false;
        }
        slow=slow.next;
        fast=fast.next;
    }
    return true;
}
function reversedHelper(head){
    let prev=null,curr=head,next;
    while(curr!=null){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return prev;
    
}