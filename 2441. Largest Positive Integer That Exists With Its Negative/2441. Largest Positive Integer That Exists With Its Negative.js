/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let set1 = new Set();
    for (let num of nums) {
        set1.add(num);
    }
    let maxK = -1;
    for (let value of set1.values()) {
        if (value > maxK) {
            if (set1.has(-1 * value)) {
                maxK = value;
            }
        }
    }
    return maxK;
};
