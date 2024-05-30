/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i - 1] ^ arr[i];
    }
    //console.log(arr);
    let map1 = new Map();
    map1.set(0, [-1]); //added to tackle the case where i is 0, need to write explanation
    for (let i = 0; i < arr.length; i++){
        if (!map1.has(arr[i])) {
            map1.set(arr[i], []);
        }
        map1.get(arr[i]).push(i);
    }
    for (let key of map1.keys()) {
        let a = map1.get(key);
        for (let i = 0; i < a.length - 1; i++) {
            for (let j = i + 1; j < a.length; j++) {
                count += (a[j] - (a[i] + 1));
            }
        }
    }
    return count;
};
