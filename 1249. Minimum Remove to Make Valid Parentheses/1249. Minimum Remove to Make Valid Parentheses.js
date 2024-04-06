/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let validParenthesis = [];
    let size = s.length;
    for (let i = 0; i < size; i++) {
        if (s[i] === '(') {
            stack.push(i);
        }
        else if (s[i] === ')') {
            if (stack.length != 0) {
                validParenthesis.push(i);
                validParenthesis.push(stack.pop());
            }
        }
    }
    validParenthesis.sort((a, b) => a - b);
    let ind1 = 0;
    let res = []
    for (let i = 0; i < size; i++) {
        if (s[i] === '(' || s[i] === ')') {
            if (validParenthesis[ind1] !== i) {
                continue;
            }
            ind1++;
        }
        res.push(s[i]);
    }
    return res.join('');
};
