/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let arr = [-1], max = 0;
    for (let num of nums) {
        max = Math.max(num, max);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) {
            arr.push(i);
        }
    }
    arr.push(nums.length);
    if (arr.length <= k + 1) {
        return 0;
    }
    let temp = 0, t;
    for (let i = 1; i + k < arr.length; i++){
        t = (arr[i] - arr[i - 1]) * (nums.length - arr[i + k - 1]);
        temp += t;
    }
    return temp;
};
