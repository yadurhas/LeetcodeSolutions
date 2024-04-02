/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map1 = new Map();
    let set1 = new Set();
    for (let i = 0; i < s.length; i++) {
        if (!map1.has(s[i])) {
            if (set1.has(t[i])) {
                return false;
            }
            map1.set(s[i], t[i]);
            set1.add(t[i]);
        }
        else {
            if (map1.get(s[i]) != t[i]) {
                return false;
            }
        }
    }
    return true;
};
