/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let val = 0;
    for (let num of nums) {
        val ^= num;
    }
    let opCount = 0;
    while (val !== 0 || k !== 0) {
        if (val % 2 != k % 2) {
            opCount++;
        }
        val = Math.floor(val / 2);
        k = Math.floor(k / 2);
    }
    return opCount;
};
