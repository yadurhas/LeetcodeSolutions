/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let diff = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        diff[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }
    let cost = diff[0], ind1 = 0, ind2 = 0, res = 0;
    while (ind2 < s.length) {
        if (cost > maxCost) {
            if (ind1 === ind2) {
                ind1++;
                ind2++;
                if (ind1 !== s.length) {
                    cost = diff[ind1];
                }
            }
            else{
                cost -= diff[ind1];
                ind1++;
            }
        }
        else {
            if (ind2 - ind1 + 1 > res) {
                res = ind2 - ind1 + 1;
            }
            ind2++;
            if (ind2 !== s.length) {
                cost += diff[ind2];
            }
        }
    } 
    return res;
};
