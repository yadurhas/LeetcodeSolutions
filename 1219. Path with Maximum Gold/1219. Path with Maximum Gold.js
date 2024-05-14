/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let m = grid.length, n = grid[0].length;
    let maxGold = 0;
    let visited = new Array(m);
    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false);
    }
    function isValid(grid, i, j, visited) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
            return false;
        }
        if (grid[i][j] === 0 || visited[i][j] === true) {
            return false;
        }
        return true;
    }

    function traverse(grid, i, j, visited, gold) {
        if (!isValid(grid, i, j, visited)) {
            return;
        }
        visited[i][j] = true;
        gold = gold + grid[i][j];
        maxGold = Math.max(gold, maxGold);
        traverse(grid, i, j + 1, visited, gold);
        traverse(grid, i, j - 1, visited, gold);
        traverse(grid, i + 1, j, visited, gold);
        traverse(grid, i - 1, j, visited, gold);
        visited[i][j] = false;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            traverse(grid, i, j, visited, 0);
        }
    }
    return maxGold;
};
