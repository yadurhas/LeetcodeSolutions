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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    function traverse(node, target) {
        let flag1 = false;
        let flag2 = false;
        if (node.left != null) {
            flag1 = traverse(node.left, target);
            if (flag1 === true) {
                node.left = null;
            }
        }
        if (node.right != null) {
            flag2 = traverse(node.right, target);
            if (flag2 === true) {
                node.right = null;
            }
        }
        if (node.left === null && node.right === null) {
            if (node.val === target) {
                return true;
            }
        }
        return false;
    }
    let flag = traverse(root, target);
    return flag === false? root: null;
};
