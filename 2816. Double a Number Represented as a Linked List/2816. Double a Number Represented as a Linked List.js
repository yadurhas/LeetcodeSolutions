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
var doubleIt = function(head) {
    function doubleIt2(node) {
        let t = new ListNode(0, node);
        let val = node.val;
        if (val * 2 >= 10) {
            t.val = 1;
        }
        node.val = (node.val * 2) % 10;
        if (node.next !== null) {
            let nxt = doubleIt2(node.next);
            node.val += nxt.val;
            node.next = nxt.next;
        }
        return t;
    }
    let res = doubleIt2(head);
    if (res.val === 0) {
        res = res.next;
    }
    return res;
};
