/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let n = grid.length;
    n = n - 2;
    let res = new Array(n);
    for (let i = 0; i < n; i++) {
        res[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            res[i][j] = Math.max(grid[i][j], grid[i][j + 1], grid[i][j + 2], grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2], grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]);
        }
    }
    return res;
};
