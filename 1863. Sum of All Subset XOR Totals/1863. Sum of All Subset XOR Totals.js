/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let sum = 0;
    function traverse(ind, xorValue) {
        if (ind < nums.length) {
            traverse(ind + 1, xorValue);
            traverse(ind + 1, xorValue ^ nums[ind]);
        }
        else {
            sum += xorValue;
        }
        return;
    }
    traverse(0, 0);
    return sum;
};
