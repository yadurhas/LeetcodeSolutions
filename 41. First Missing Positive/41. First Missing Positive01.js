/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let arr = new Array(nums.length).fill(false);
    for (let num of nums) {
        if (num > 0) {
            arr[num - 1] = true;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (arr[i] === false) {
            return i + 1;
        }
    }
    return nums.length + 1;
};
