/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let list2_head = list2, list2_tail, node;
    node = list2_head;
    while (node.next != null) {
        node = node.next;
    }
    list2_tail = node;
    node = list1;
    let prev = null, ind = 0;
    while (node != null) {
        if (ind === a) {
            prev.next = list2_head;
        }
        if (ind === b) {
            list2_tail.next = node.next;
        }
        prev = node;
        node = node.next;
        ind++;
    }
    return list1;
};
