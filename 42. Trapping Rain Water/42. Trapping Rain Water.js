/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let prev = height[0], temp = 0, trapped = 0, prevIndex = 0;
    for (let i = 1; i < height.length; i++) {
        if (height[i] >= prev) {
            trapped += temp;
            prev = height[i];
            prevIndex = i;
            temp = 0;
        }
        else {
            temp += prev - height[i];
        }
    }
    temp = 0;
    prev = height[height.length - 1];
    for (let i = height.length - 2; i >= prevIndex; i--) {
        if (height[i] >= prev) {
            trapped += temp;
            prev = height[i];
            temp = 0;
        }
        else {
            temp += prev - height[i];
        }
    }
    return trapped;
};
