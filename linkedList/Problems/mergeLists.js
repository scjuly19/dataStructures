/**
 * @description:Merge two sorted linked list
 * @Solution: We take a dummyNode which starts from -1 and then we run
 * a while loop till one of the lists points to null.
 Then, we check if the curr value of l1>l2, and if it is then we need to put l2 first
 i.e the smaller value as we are sorting in ascending order.
 Then we put l2=l2.next and same for l1 if this is not true.
 At last we append the remaining l1 or l2. And return the next of dummyNode because we are using this as a pointer to the first l1 or l2 element.
*/

function mergeLists(l1,l2){
    let dummyNode=new ListNode(-1);
    let curr=dummyNode;
    while(l1&&l2){
        if(l1.val>l2.val){
            curr.next=l2;
            l2=l2.next;
        }
        else{
            curr.next=l1;
            l1=l1.next;
        }
        curr=curr.next;
    }
    curr.next=l1||l2;
    return dummyNode.next;
}