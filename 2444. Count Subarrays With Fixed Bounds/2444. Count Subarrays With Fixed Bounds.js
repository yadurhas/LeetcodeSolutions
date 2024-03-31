/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let ind1 = 0, ind2 = 0;
    let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER, minIndex, maxIndex;
    let count = 0;
    while (ind2 < nums.length) {
        if (nums[ind2] < minK || nums[ind2] > maxK) {
            min = Number.MAX_SAFE_INTEGER;
            max = Number.MIN_SAFE_INTEGER;
            ind1 = ind2 + 1;
            ind2++;
            continue;
        }
        min = Math.min(min, nums[ind2]);
        max = Math.max(max, nums[ind2]);
        //console.log(min, max);
        if (nums[ind2] === minK) {
            minIndex = ind2;
        }
        if (nums[ind2] === maxK) {
            maxIndex = ind2;
        }
        if (min === minK && max === maxK) {
            //console.log(ind1, ind2, maxIndex, minIndex);
            count += Math.min(maxIndex, minIndex) - ind1 + 1;
        }
        ind2++;
    }
    return count;
};
