/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0, max_depth = 0;
    for (let char of s) {
        if (char === '(') {
            depth++;
            if (depth > max_depth) {
                max_depth = depth;
            }
        }
        else if (char === ')') {
            depth--;
        }
    }
    return max_depth;
};
