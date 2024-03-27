/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let ind1 = 0, ind2 = -1, prod = 1;
    let size = nums.length;
    let temp, count = 0, t;
    //let us always keep prod < k
    function getInd2(ind2, prod) {
        if (ind2 === size - 1) {
            return [ind2, prod];
        }
        t = prod * nums[ind2 + 1];
        if (t < k) {
            return getInd2(ind2 + 1, t);
        } 
        return [ind2, prod];
    }
    while (ind1 < size) {
        temp = getInd2(ind2, prod);
        ind2 = temp[0];
        prod = temp[1];
        count += (ind2 - ind1 + 1);
        prod = prod != 1 ? prod / nums[ind1]: prod;
        ind1++;
        if (ind2 < ind1) {
            ind2 = ind1 - 1;
        } 
    }
    return count;
};
