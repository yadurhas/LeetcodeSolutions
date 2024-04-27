/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    let arr1, arr2 = new Map();
    function findDist(a, b, n) {
        let dist1 = (a - b + n) % n;
        let dist2 = (b - a + n) % n;
        return Math.min(dist1, dist2);
    }
    for (let i = 0; i < ring.length; i++) {
        if (ring[i] === key[0]) {
            arr2.set(i, findDist(0, i, ring.length) + 1);
        }
    }
    arr1 = arr2;
    arr2 = new Map();
    //console.log(arr1);
    for (let i = 1; i < key.length; i++) {
        for (let j = 0; j < ring.length; j++) {
            let t = Number.MAX_SAFE_INTEGER;
            if (ring[j] === key[i]) {
                for (let key of arr1.keys()) {
                    t = Math.min(t, arr1.get(key) + findDist(key, j, ring.length) + 1);
                }
                arr2.set(j, t);
            }
        }
        arr1 = arr2;
        arr2 = new Map();
    }
    //console.log(arr1);
    let minSteps = Number.MAX_SAFE_INTEGER;
    for (let value of arr1.values()) {
        if (value < minSteps) {
            minSteps = value;
        }
    }
    return minSteps;
};
