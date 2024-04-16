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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        return new TreeNode(val, root);
    }
    function traverse(node, val, depth) {
        if (node !== null) {
            if (depth === 2) {
                let t1, t2;
                t1 = new TreeNode(val, node.left);
                t2 = new TreeNode(val, null, node.right);
                node.left = t1;
                node.right = t2;
                return;
            }
            traverse(node.left, val, depth - 1);
            traverse(node.right, val, depth - 1);
        }
    }
    traverse(root, val, depth);
    return root;
};
