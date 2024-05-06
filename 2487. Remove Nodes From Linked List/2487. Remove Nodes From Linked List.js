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
var removeNodes = function(head) {
    let arr = [], node = head;
    while (node !== null) {
        if (arr.length > 0) {
            while (arr[arr.length - 1].val < node.val) {
                arr.pop();
                if (arr.length === 0) {
                    break;
                }
            }
        }
        arr.push(node);
        node = node.next;
    }
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1].next = arr[i];
    }
    arr[arr.length - 1].next = null;
    return arr[0];
};
