/**
 * @param {string} s
 * @return {boolean}
 */

/* 
strings are immutable in Javascript, fucker.

*/

var checkValidString = function(s) {
    let dp = new Array(s.length);
    let visited = new Array(s.length);
    for (let i = 0; i < dp.length; i++){
        dp[i] = new Array(s.length + 1);
        visited[i] = new Array(s.length + 1).fill(false);
    }
    function trav(s, ind, count, dp, visited) {
        if (ind === s.length) {
            if (count === 0) {
                return true;
            }
            return false;
        }
        if (visited[ind][count]) {
            return dp[ind][count];
        } 
        visited[ind][count] = true;
        if (s[ind] === '*') {
            let t1, t2;
            t1 = trav(s, ind + 1, count, dp, visited);
            if (t1 === true) {
                dp[ind][count] = true;
            }
            else {
                t2 = trav(s, ind + 1, count + 1, dp, visited);
                if (t2 === true) {
                    dp[ind][count] = true;
                }
                else {
                    dp[ind][count] = (count > 0) ? trav(s, ind + 1, count - 1, dp, visited) : false;
                }
            }
        }
        else if (s[ind] === '(') {
            dp[ind][count] = trav(s, ind + 1, count + 1, dp, visited);
        }
        else if (s[ind] === ')') {
            dp[ind][count] = count > 0 ? trav(s, ind + 1, count - 1, dp, visited): false;
        }
        return dp[ind][count];
    }
    return trav(s, 0, 0, dp, visited);
};
