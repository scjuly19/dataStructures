/** Add two numbers represented as linked lists in reverse order.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let pointer1 = l1;
    let pointer2 = l2;
    let dummyNode = new ListNode();
    let dummyHead = dummyNode;
    let carry  = 0;
    while(pointer1 != null || pointer2 != null) {
        let val1 = pointer1 == null ? 0 : pointer1.val;
        let val2 = pointer2 == null ? 0 : pointer2.val;
        let sum = carry + val1 + val2;
        if(sum > 9) {
            carry = 1;
        }
        else {
            carry = 0;
        }
        dummyNode.next = new ListNode(sum % 10);
        dummyNode = dummyNode.next;
        pointer1 = pointer1 == null ? null : pointer1.next;
        pointer2 = pointer2 == null ? null : pointer2.next;
    }
    if(carry > 0) {
        dummyNode.next = new ListNode(carry);
    }    
    return dummyHead.next;
};