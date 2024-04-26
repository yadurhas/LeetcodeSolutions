/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
    let grid2, grid3, n = grid.length;
    if (n === 1) {
        return grid[0][0];
    }
    function getGrid(n) {
        let grid = new Array(n);
        for (let i = 0; i < n; i++){
            grid[i] = new Array(n);
        }
        return grid;
    }
    grid2 = getGrid(n);
    grid3 = getGrid(n);
    let ind = 0;
    while (ind < n) {
        if (ind != 0) {
            grid[ind][0] = grid[ind][0] + grid3[ind - 1][1];
            for (let i = 1; i < n - 1; i++) {
                grid[ind][i] += Math.min(grid2[ind - 1][i - 1], grid3[ind - 1][i + 1]);
            }
            grid[ind][n - 1] = grid[ind][n - 1] + grid2[ind - 1][n - 2];
        }
        grid2[ind][0] = grid[ind][0];
        for (let i = 1; i < n; i++) {
            if (grid[ind][i] > grid2[ind][i - 1]) {
                grid2[ind][i] = grid2[ind][i - 1]; 
            }
            else {
                grid2[ind][i] = grid[ind][i];
            }
        }
        grid3[ind][n - 1] = grid[ind][n - 1];
        for (let i = n - 2; i >= 0; i--) {
            if (grid[ind][i] > grid3[ind][i + 1]) {
                grid3[ind][i] = grid3[ind][i + 1];
            }
            else {
                grid3[ind][i] = grid[ind][i];
            }
        }
        ind++;
    }
    return grid2[n - 1][n - 1];
};
