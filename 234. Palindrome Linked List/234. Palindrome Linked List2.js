/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/* 
Relevant node in this code is 

c in case of a -> b -> c -> d while b-> next is set to null

d in case of a -> b -> c -> d -> e while b -> next is set to null and c, the middle node is ignored;

*/

var isPalindrome = function(head) {
    if (head.next === null){
        return true;
    }
    let temp, node1, node2;
    function getRelevantNode() {
        node1 = head;
        node2 = head.next;
        while (true){
            if (node2.next === null) {
                temp = node1.next;
                node1.next = null;
                return temp;
            }
            temp = node1;
            node1 = node1.next;
            node2 = node2.next;
            if (node2.next === null) {
                temp.next = null;
                return node1.next;
            }
            node2 = node2.next;
        }        
    }
    function reverseLinkedList(node, prev) {
        if (node !== null) {
            temp = node.next;
            node.next = prev;
            return reverseLinkedList(temp, node);
        }
        return prev;
    }
    function compareLinkedLists(head1, head2){
        if (head1 === null || head2 === null) {
            if (head1 != null || head2 != null) {
                return false;
            }
            return true;
        }
        return head1.val !== head2.val ? false : compareLinkedLists(head1.next, head2.next);
    }
    let r = getRelevantNode();
    let t = reverseLinkedList(r, null);
    return compareLinkedLists(head, t);
};
