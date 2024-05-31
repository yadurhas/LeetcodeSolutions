/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let set1 = new Set();
    for (let num of nums) {
        if (set1.has(num)) {
            set1.delete(num);
        }
        else {
            set1.add(num);
        }
    }
    return Array.from(set1);
};
