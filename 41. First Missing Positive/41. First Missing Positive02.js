/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    function traverse(nums, ind) {
        let t = nums[ind];
        nums[ind] = true;
        if (t !== true && t !== false) {
            if (t <= nums.length && t > 0) {
                traverse(nums, t - 1);
            }
        }
        return;
    }
    let t;
    for (let i = 0; i < nums.length; i++) {
        t = nums[i];
        if (t !== true) {
            nums[i] = false;
            if (t > 0 && t <= nums.length) {
                traverse(nums, t - 1);
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === false) {
            return i + 1;
        }
    }
    return nums.length + 1;
};
