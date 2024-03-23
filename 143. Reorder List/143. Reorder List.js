/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head.next === null) {
        return;
    }
    function getRelevantNode(head) {
        let slow = head;
        let fast = head.next;
        let temp;
        while (true) {
            if (fast.next === null) {
                temp = slow.next;
                slow.next = null;
                return temp;
            }
            slow = slow.next;
            fast = fast.next;
            if (fast.next === null) {
                temp = slow.next;
                slow.next = null;
                return temp;
            }
            fast = fast.next;
        }
    }
    let head2;
    head2 = getRelevantNode(head);
    function reverseList(node, prev) {
        if (node === null) {
            return prev;
        }
        else {
            let temp = node.next;
            node.next = prev;
            return reverseList(temp, node);
        }
    }
    head2 = reverseList(head2, null);
    function merge(head1, head2) {
        let temp1, temp2;
        while (head2 != null) {
            temp1 = head2.next;
            head2.next = head1.next;
            head1.next = head2;
            head1 = head2.next;
            head2 = temp1;
        }
        return;
    }
    merge(head, head2);
    return;
};
