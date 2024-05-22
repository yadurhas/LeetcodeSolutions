/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let possiblePartitions = [];
    function isPalindrome(arr) {
        let n = arr.length;
        for (let i = 0; i < n / 2; i++) {
            if (arr[i] !== arr[n - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    function convertToStrings(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].join('');
        }
    }
    function traverse(s, ind, arr) {
        if (ind === s.length) {
            if (isPalindrome(arr[arr.length - 1])) {
                let t = Array.from(arr);
                convertToStrings(t);
                possiblePartitions.push(t);
            }
            return;
        }
        if (ind === 0) {
            arr.push([s[ind]]);
            traverse(s, ind + 1, arr);
            //arr.pop();
        }
        else {
            arr[arr.length - 1].push(s[ind]);
            traverse(s, ind + 1, arr);
            arr[arr.length - 1].pop(s[ind]);
            if (isPalindrome(arr[arr.length - 1])) {
                arr.push([s[ind]]);
                traverse(s, ind + 1, arr);
                arr.pop();
            }
        }
    }
    traverse(s, 0, []);
    return possiblePartitions;
};
