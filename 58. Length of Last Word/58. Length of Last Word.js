/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let flag = false;
    let ind = s.length - 1;
    let length = 0;
    while ((flag === false || s[ind] !== ' ') && ind >= 0) {
        if (flag === false) {
            if (s[ind] === ' ') {
                ind--;
                continue;
            }
            flag = true;
        }
        length++;
        ind--;
    }
    return length;
};
