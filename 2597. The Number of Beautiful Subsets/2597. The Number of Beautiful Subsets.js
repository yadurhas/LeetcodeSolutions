/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    let count = 0;
    function traverse(nums, ind, k, map) {
        if (ind === nums.length) {
            if (map.size !== 0) {
                count++;
            }
            return;
        }
        traverse(nums, ind + 1, k, map);
        if (!map.has(nums[ind] - k) && !map.has(nums[ind] + k)) {
            if (!map.has(nums[ind])) {
                map.set(nums[ind], 0);
            }
            map.set(nums[ind], map.get(nums[ind]) + 1);
            traverse(nums, ind + 1, k, map);
            map.set(nums[ind], map.get(nums[ind]) - 1);
            if (map.get(nums[ind]) === 0) {
                map.delete(nums[ind]);
            }
        }
    }
    traverse(nums, 0, k, new Map());
    return count;
};
