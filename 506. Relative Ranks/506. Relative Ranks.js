/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let n = score.length;
    let temp = new Array(n);
    for (let i = 0; i < n; i++) {
        temp[i] = [score[i], i];
    }
    function getRes(temp, n) {
        res = new Array(n);
        for (let i = 0; i < n; i++) {
            res[temp[i][1]] = temp[i][0];
        }
        return res;
    }
    temp.sort((a, b) => b[0] - a[0]);
    temp[0][0] = "Gold Medal";
    if (n === 1) {
        return getRes(temp, n);
    }
    temp[1][0] = "Silver Medal";
    if (n === 2) {
        return getRes(temp, n);
    }
    temp[2][0] = "Bronze Medal";
    for (let i = 3; i < n; i++) {
        temp[i][0] = i + 1 + "";
    }
    return getRes(temp, n);
};
