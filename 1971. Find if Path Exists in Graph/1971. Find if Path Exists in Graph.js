/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if (source === destination) {
        return true;
    }
    let adjList;
    adjList = new Array(n);
    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }
    for (let i = 0; i < edges.length; i++) {
        adjList[edges[i][0]].push(edges[i][1]);
        adjList[edges[i][1]].push(edges[i][0]);
    }
    let queue = [source], visited = new Array(n).fill(false);
    visited[source] = true;
    let ind1 = 0, ind2 = 1;
    while (ind1 < ind2) {
        for (let el of adjList[queue[ind1]]) {
            if (visited[el] === false) {
                if (el === destination) {
                    return true;
                }
                visited[el] = true;
                queue.push(el);
                ind2++;
            }
        }
        ind1++;
    }
    return false;
};
