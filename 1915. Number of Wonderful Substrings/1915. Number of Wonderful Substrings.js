/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
    let arr = new Array(10), t = 1, t2;
    let map1 = new Map();
    map1.set(0, 1);
    for (let i = 0; i < 10; i++) {
        arr[i] = t;
        t *= 2;
    }
    t = 0;
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        t = t ^ arr[word.charCodeAt(i) - 97];
        for (let j = 0; j < 10; j++) {
            t2 = t ^ arr[j];
            if (map1.has(t2)) {
                count += map1.get(t2);
            }
        }
        t2 = t ^ 0;
        if (map1.has(t2)) {
            count += map1.get(t2);
        }
        if (!map1.has(t)) {
            map1.set(t, 0);
        }
        map1.set(t, map1.get(t) + 1);
    }
    return count;
};
