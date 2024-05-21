/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    function traverse(subsetsArr, nums, ind, arr) {
        if (ind === nums.length) {
            subsetsArr.push(Array.from(arr));
            return;
        }
        traverse(subsetsArr, nums, ind + 1, arr);
        arr.push(nums[ind]);
        traverse(subsetsArr, nums, ind + 1, arr);
        arr.pop();
    }
    let subsetsArr = [];
    traverse(subsetsArr, nums, 0, []);
    return subsetsArr;
};
