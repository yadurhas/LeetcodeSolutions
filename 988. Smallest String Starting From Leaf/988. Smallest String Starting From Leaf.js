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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let arr = null;
    function smaller(t, arr) {
        let ind1 = t.length - 1, ind2 = arr.length - 1;
        while (ind1 >= 0 && ind2 >= 0) {
            if (arr[ind2] > t[ind1]){
                return true;
            }
            else if (arr[ind2] < t[ind1]) {
                return false;
            }
            ind1--;
            ind2--;
        }
        if (ind1 >= 0) {
            return false;
        }
        return true;
    }

    function traverse(node, t) {
        //console.log(node, t, arr);
        t.push(node.val);
        if (node.left === null && node.right === null) {
            if (arr === null) {
                arr = [...t];
            }
            else if (smaller(t, arr)) {
                arr = [...t];
            }
            t.pop();
            return;
        }
        //console.log("here");
        if (node.left !== null) {
            traverse(node.left, t);
        }
        if (node.right !== null) {
            traverse(node.right, t);
        }
        t.pop()
    }
    traverse(root, []);
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 97;
    }
    //console.log(arr);
    return String.fromCharCode(...arr);
};
