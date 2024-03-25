/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = [];
    let tMap = new Set();
    for (let num of nums) {
        if (tMap.has(num)) {
            res.push(num);
        }
        else {
            tMap.add(num);
        }
    }
    return res;
};
