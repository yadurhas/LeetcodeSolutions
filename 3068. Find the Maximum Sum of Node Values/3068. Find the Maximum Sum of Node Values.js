/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
    let n = nums.length;
    let arr = new Array(n);
    let sum = 0;
    for (let i = 0; i < n; i++) {
        arr[i] = [nums[i], (nums[i] ^ k) - nums[i]];
        sum += nums[i];
    }
    /*
        a, b
        inorder (a[1] > b[1])
        -ve
        out of order (b[1] > a[1])
        +ve
        equals (a[1] = b[1])
        0
     */

    arr.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i + 1 < n; i = i + 2) {
        if (arr[i][1] + arr[i + 1][1] >= 0) {
            sum += arr[i][1] + arr[i + 1][1];
        } 
    }
    return sum;
};
