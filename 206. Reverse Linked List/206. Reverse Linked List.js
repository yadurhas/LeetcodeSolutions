/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) {
        return null;
    }
    let res;
    function traverse(node, prev) {
        if (node.next === null) {
            node.next = prev;
            res = node;
        }
        else {
            traverse(node.next, node);
            node.next = prev;
        }
    }
    traverse(head, null);
    return res;
};
