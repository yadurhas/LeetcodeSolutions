/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let freq = new Map();
    for (let task of tasks) {
        if (!freq.has(task)) {
            freq.set(task, 0);
        }
        freq.set(task, freq.get(task) + 1);
    }
    let freqArr = [];
    for (let key of freq.keys()) {
        freqArr.push([key, freq.get(key)]);
    }
    freqArr.sort((a, b) => b[1] - a[1]);
    let arr = new Array(freqArr[0][1]);
    let arrSize = freqArr[0][1];
    for (let i = 0; i < arrSize; i++) {
        arr[i] = [];
    }
    if (freqArr.length === 1) {
        return freqArr[0][1] + (freqArr[0][1] - 1) * n;
    }
    let ind = 0;
    let i;
    for (i = 0; i < freqArr.length && freqArr[i][1] === arrSize; i++) {
        for (let j = 0; j < freqArr[i][1]; j++) {
            arr[ind].push(freqArr[i][0]);
            ind = (ind + 1) % arrSize;
        }
    }
    for (; i < freqArr.length; i++) {
        for (let j = 0; j < freqArr[i][1]; j++) {
            arr[ind].push(freqArr[i][0]);
            ind = (ind + 1) % (arrSize - 1);
        }
    }
    let minIntervals = 0;
    for (let i = 0; i < arrSize - 1; i++) {
        minIntervals += (arr[i].length < (n + 1) ? (n + 1) : arr[i].length);
    }
    minIntervals += arr[arrSize - 1].length;
    return minIntervals;
};
