/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    let m = land.length, n = land[0].length;
    function getEnd(land, i, j, m, n) {
        while (j < n) {
            if (land[i][j] === 0) {
                break;
            }
            j++;
        }
        j--;
        while (i < m) {
            if (land[i][j] === 0) {
                break;
            }
            i++;
        }
        i--
        return [i, j];
    }
    let t;
    let res = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (land[i][j] === 1) {
                if (i === 0 || land[i - 1][j] === 0) {
                    if (j === 0 || land[i][j - 1] === 0) {
                        t = getEnd(land, i, j, m, n);
                        res.push([i, j, ...t]);
                    }
                }
            }
        }
    }
    return res;
};
