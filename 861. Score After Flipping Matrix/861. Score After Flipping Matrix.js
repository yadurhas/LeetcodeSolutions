/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < grid[i].length; j++) {
                grid[i][j] = grid[i][j] === 0? 1 : 0;
            }
        }
    }
    let t = 1, count, res = 0;
    for (let j = grid[0].length - 1; j >= 0; j--) {
        count = 0;
        for (let i = 0; i < grid.length; i++) {
            count += grid[i][j];
        }
        count = 2 * count < grid.length ? grid.length - count: count;
        res += t * count;
        t = t * 2;
    }
    return res;
};
