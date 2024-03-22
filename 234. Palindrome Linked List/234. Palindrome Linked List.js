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
Brute force by storing all values in a array and checking for a palindrome

*/

var isPalindrome = function(head) {
    let arr = [], node = head;
    while (node != null) {
        arr.push(node.val);
        node = node.next;
    }
    let size = arr.length;
    let i = 0, j = size - 1;
    while (i < j) {
        if (arr[i] !== arr[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};
