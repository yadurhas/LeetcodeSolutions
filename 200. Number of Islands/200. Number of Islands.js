/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length, n = grid[0].length;
    let visited = new Array(m);
    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false);
    }  
    function traverse(grid, i, j, m, n, visited) {
        if (visited[i][j] === false && grid[i][j] === '1') {
            visited[i][j] = true;
            if (i - 1 >= 0) {
                traverse(grid, i - 1, j, m, n, visited);
            }
            if (j - 1 >= 0) {
                traverse(grid, i, j - 1, m, n, visited);
            }
            if (i + 1 < m) {
                traverse(grid, i + 1, j, m, n, visited);
            }
            if (j + 1 < n) {
                traverse(grid, i, j + 1, m, n, visited);
            }
        }
    }
    let islandCount = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (visited[i][j] === false && grid[i][j] === '1') {
                traverse(grid, i, j, m, n, visited);
                islandCount++;
            }
        }
    }
    return islandCount;
};
