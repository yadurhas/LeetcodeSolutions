/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxSubarrayLength = function(nums, k) {
    let ind1 = 0, ind2 = 0, maxLength = 1;
    let map1 = new Map();
    map1.set(nums[0], 1);   
    console.log(map1);
    function getInd2(nums, ind2, map1) {
        ind2++;
        while (ind2 < nums.length) {
            if (map1.get(nums[ind2]) === k) {
                break;
            }
            if (!map1.has(nums[ind2])) {
                map1.set(nums[ind2], 0);
            }
            map1.set(nums[ind2], map1.get(nums[ind2]) + 1);
            ind2++;
        }
        return --ind2;
    }

    function getInd1(nums, ind1, map1) {
        while (true) {
            map1.set(nums[ind1], map1.get(nums[ind1]) - 1);
            if (map1.get(nums[ind1]) === k) {
                return ++ind1;
            }
            ind1++;
        }
    }

    while (true) {
        ind2 = getInd2(nums, ind2, map1);
        maxLength = Math.max(maxLength, ind2 - ind1 + 1);
        if (ind2 === nums.length - 1) {
            break;
        }
        ind2++;
        map1.set(nums[ind2], map1.get(nums[ind2]) + 1);
        ind1 = getInd1(nums, ind1, map1);
    }
    return maxLength;
};
