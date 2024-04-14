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
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    function traverse(node, flag) {
        if (node !== null) {
            if (node.left === null && node.right === null) {
                if (flag === true) {
                    sum += node.val;
                }
                return;
            }
            traverse(node.left, true);
            traverse(node.right, false);
        }
    }
    traverse(root);
    return sum;
};
