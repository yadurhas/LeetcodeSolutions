/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [], flag = false;
    for (let interval of intervals) {
        if (flag === false) {
            if (newInterval[0] <= interval[1]) {
                flag = true;
                if (newInterval[0] >= interval[0]) {
                    res.push([interval[0], -1]);
                }
                else {
                    res.push([newInterval[0], -1]);
                }
            }
            else {
                res.push(interval);
            }
        }
        if (flag === true) {
            if (res[res.length - 1][1] === -1) {
                if (newInterval[1] < interval[0]) {
                    res[res.length - 1][1] = newInterval[1];
                    res.push(interval);
                }
                else if (newInterval[1] <= interval[1]) {
                    res[res.length - 1][1] = interval[1];
                }
            }
            else{
                res.push(interval);
            }
        }
    }
    if (res[res.length - 1][1] === -1) {
        res[res.length - 1][1] = newInterval[1];
    }
    if (flag === false) {
        res.push(newInterval);
    }
    return res;
};
