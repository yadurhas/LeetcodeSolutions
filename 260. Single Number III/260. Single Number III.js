/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let set1 = new Set();
    let set2 = new Set();
    for (let num of nums) {
        if (set1.has(num)) {
            set2.delete(num);
        }
        else {
            set1.add(num);
            set2.add(num);
        }
    }
    return Array.from(set2);
};
