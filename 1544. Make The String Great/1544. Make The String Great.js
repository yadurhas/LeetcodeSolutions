/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let arr = []
    for (let el of s) {
        arr.push(el);
    }
    let ind1 = 0, ind2 = 1;
    while (ind2 < arr.length) {
        if (ind1 === -1) {
            arr[ind1 + 1] = arr[ind2];
            ind1++;
        }
        else if ((arr[ind1].toUpperCase() === arr[ind2] || arr[ind2].toUpperCase() === arr[ind1]) && arr[ind1] != arr[ind2]) {
            ind1--;
        }
        else {
            arr[ind1 + 1] = arr[ind2];
            ind1++;
        }
        ind2++;
    }
    return arr.slice(0, ind1 + 1).join("");
