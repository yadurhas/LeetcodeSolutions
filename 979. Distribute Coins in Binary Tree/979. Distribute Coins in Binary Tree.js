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
var distributeCoins = function(root) {
    let minMoves = 0;
    function traverse(node){
        if (node !== null){
            let val1 = traverse(node.left);
            let val2 = traverse(node.right);
            minMoves += Math.abs(val1) + Math.abs(val2);
            return val1 + val2 + node.val - 1;
        }
        return 0;
    }
    traverse(root);
    return minMoves;
};
