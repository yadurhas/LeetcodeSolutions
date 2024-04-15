/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum = 0;
    function traverse(node, num) {
        num = num * 10 + node.val;
        if (node.left === null && node.right === null) {
            sum += num;
            return;
        }
        if (node.left !== null) {
            traverse(node.left, num);
        }
        if (node.right !== null) {
            traverse(node.right, num);
        }
    }
    traverse(root, 0);
    return sum;
};
