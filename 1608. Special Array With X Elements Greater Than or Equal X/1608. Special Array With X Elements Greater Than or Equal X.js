/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
   nums.sort((a, b) => b - a);
   if (nums[nums.length - 1] >= nums.length) {
    return nums.length;
   }
   for (let i = 0; i < nums.length - 1; i++) {
     if (nums[i] >= i + 1) {
        if (nums[i + 1] < i + 1) {
            return i + 1;
        }
     }
   } 
   return -1;
};
