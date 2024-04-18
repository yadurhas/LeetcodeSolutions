/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                perimeter += (i - 1 >= 0) ? (grid[i - 1][j] === 0 ? 1: 0) : 1;
                perimeter += (j - 1 >= 0) ? (grid[i][j - 1] === 0 ? 1: 0) : 1;
                perimeter += (i + 1 < grid.length) ? (grid[i + 1][j] === 0 ? 1: 0) : 1;
                perimeter += (j + 1 < grid[i].length) ? (grid[i][j + 1] === 0 ? 1: 0) : 1;   
            }
        }
    }
    return perimeter;
};
