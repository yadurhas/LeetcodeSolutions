/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
    let dp = new Array(s.length), lastInd = new Map();
    dp[0] = 1;
    lastInd.set(s.charCodeAt(0), 0);
    let t1, t2, t3, maxLength = 1;
    for (let i = 1; i < s.length; i++) {
        dp[i] = 1;
        t1 = s.charCodeAt(i);
        t3 = t1;
        t2 = t1 + k;
        t2 = t2 <= 122 ? t2 : 122;
        t1 = t1 - k;
        t1 = t1 >= 97 ? t1 : 97;
        for (let j = t1; j <= t2; j++) {
            if (lastInd.has(j)) {
                dp[i] = Math.max(dp[i], dp[lastInd.get(j)] + 1);
            }
        }
        if (dp[i] > maxLength) {
            maxLength = dp[i];
        }
        lastInd.set(t3, i);
    }
    return maxLength;
};
