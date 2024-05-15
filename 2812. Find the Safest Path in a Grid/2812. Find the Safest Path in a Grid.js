/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    let n = grid.length;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
        return 0;
    }
    let visited = new Array(n);
    let dupGrid = new Array(n);
    let maxSafety = new Array(n);
    for (let i = 0; i < n; i++) {
        visited[i] = new Array(n);
        maxSafety[i] = new Array(n);
        dupGrid[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            visited[i][j] = false;
            dupGrid[i][j] = grid[i][j];
            grid[i][j] = Number.MAX_SAFE_INTEGER;
        }
    }
    function reqFunc2(grid, dupGrid, ind1, ind2, rL2, cL2, rInc, cInc) {
        for (let i = ind1; i != rL2; i = i + rInc) {
            if (dupGrid[i][ind2] === 1) {
                grid[i][ind2] = 0;
            }
            else {
                if (i != ind1) {
                    grid[i][ind2] = Math.min(grid[i][ind2], grid[i - rInc][ind2] + 1);
                }
            }
            for (let j = ind2 + cInc; j != cL2; j = j + cInc) {
                if (dupGrid[i][j] === 1) {
                    grid[i][j] = 0;
                }
                else {
                    grid[i][j] = Math.min(grid[i][j], grid[i][j - cInc] + 1);
                    if (i != ind1) {
                        grid[i][j] = Math.min(grid[i][j], grid[i - rInc][j] + 1);
                    }
                }
            }
        }
    }
    reqFunc2(grid, dupGrid, 0, 0, n, n, 1, 1);
    reqFunc2(grid, dupGrid, 0, n - 1, n, - 1, 1, -1);
    reqFunc2(grid, dupGrid, n - 1, n - 1, -1, -1, -1, -1);
    reqFunc2(grid, dupGrid, n - 1, 0, -1, n, -1, 1);
    let maxHeap = [[0, 0]];
    maxSafety[0][0] = grid[0][0]; 
    visited[0][0] = true;
    function insertToHeap(heap, maxSafety, val) {
        let ind = heap.length;
        heap.push(val);
        if (ind === 0) {
            return;
        }
        let parent = Math.floor((ind - 1) / 2), t;
        while (maxSafety[heap[ind][0]][heap[ind][1]] > maxSafety[heap[parent][0]][heap[parent][1]]) {
            t = heap[ind];
            heap[ind] = heap[parent];
            heap[parent] = t;
            ind = parent;
            if (ind === 0 ){
                break;
            }
            parent = Math.floor((ind - 1) / 2);
        }
        return;
    }
    function popFromHeap(heap) {
        if (heap.length != 0) {
            heap[0] = heap[heap.length - 1];
            heap.pop();
            let ind = 0, i1, j1, i2, j2, t; 
            let lChild = 2 * ind + 1, rChild = 2 * ind + 2;
            let maxInd;
            while (lChild < heap.length) {
                maxInd = ind;
                i1 = heap[maxInd][0];
                j1 = heap[maxInd][1];
                i2 = heap[lChild][0];
                j2 = heap[lChild][1];                  
                if (maxSafety[i2][j2] > maxSafety[i1][j1]) {
                    maxInd = lChild;
                }
                if (rChild < heap.length) {
                    i1 = heap[maxInd][0];
                    j1 = heap[maxInd][1];
                    i2 = heap[rChild][0];
                    j2 = heap[rChild][1];
                    if (maxSafety[i2][j2] > maxSafety[i1][j1]) {
                        maxInd = rChild;
                    }
                }
                if (maxInd === ind) {
                    break;
                }
                t = heap[ind];
                heap[ind] = heap[maxInd];
                heap[maxInd] = t;
                ind = maxInd;
                lChild = 2 * ind + 1;
                rChild = 2 * ind + 2;
            }
            return;
        }
    }
    function isValidInd(i, j) {
        if (i < 0 || i >= n || j < 0 || j >= n) {
            return false;
        }
        return true;
    }
    function reqFunc1(i, j, x, y) {
        if (isValidInd(i + x, j + y)) {
            if (visited[i + x][j + y] === false) {
                visited[i + x][j + y] = true;
                maxSafety[i + x][j + y] = Math.min(maxSafety[i][j], grid[i + x][j + y]);
                insertToHeap(maxHeap, maxSafety, [i + x, j + y]);
            }
        } 
    }
    let ind;
    while (visited[n - 1][n - 1] === false) {
        ind = maxHeap[0];
        popFromHeap(maxHeap);
        reqFunc1(...ind, 1, 0);
        reqFunc1(...ind, 0, 1);
        reqFunc1(...ind, -1, 0);
        reqFunc1(...ind, 0, -1);
    }
    return maxSafety[n - 1][n - 1];
};
