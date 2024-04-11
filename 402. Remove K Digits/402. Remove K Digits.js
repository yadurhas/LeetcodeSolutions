/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let res = [], numSize = num.length;
    function getString(arr) {
        if (arr.length === 0) {
            return "0";
        }
        let i = 0;
        while (arr[i] === '0') {
            i++;
            if (i === arr.length) {
                return "0";
            }
        }
        return arr.slice(i).join('');
    } 
    for (let i = 0; i < numSize; i++) {
        if (res.length === 0) {
            res.push(num[i]);
            continue;
        }
        t = res[res.length - 1];
        if (num[i] < t) {
            while (res[res.length - 1] > num[i]){
                if (k === 0) {
                    while (i < numSize) {
                        res.push(num[i]);
                        i++;
                    }
                    return getString(res);
                }
                res.pop();
                k--;
                if (res.length === 0) {
                    break;
                }
            }
            res.push(num[i]);
        }
        else if (num[i] >= t) {
            res.push(num[i]);
        }
    }
    while (k !== 0) {
        res.pop();
        k--;
    }
    return getString(res);
};
