/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    let adjList = new Map();
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]){
            let t1, t2;
            if (!adjList.has(s1[i])) {
                adjList.set(s1[i], []);
            }
            if (!adjList.has(s2[i])) {
                adjList.set(s2[i], []);
            }
            t1 = adjList.get(s1[i]);
            t2 = adjList.get(s2[i]);
            t1.push(s2[i]);
            t2.push(s1[i]);
            //adjList.set(s1[i], t1);
            //adjList.set(s2[i], t2);
        }
    }
    //console.log(adjList);
    let visited = new Set();
    let map = new Map();
    let queue, ind, min, queue2;
    for (let key of adjList.keys()) {
        if (!visited.has(key)) {
            queue = [];
            queue2 = new Set();
            queue.push(key);
            ind = 0;
            min = queue[0];
            while (ind < queue.length) {
                visited.add(queue[ind]);
                for (let el of adjList.get(queue[ind])) {
                    if (!queue.includes(el)) {
                        queue.push(el);
                    }
                }
                if (min > queue[ind]) {
                    min = queue[ind];
                }
                ind++;
            }
            for (let el of queue) {
                map.set(el, min);
            }
        }
    }
    //console.log(map);
    let res = [];
    for (let char of baseStr) {
        if (map.has(char)) {
            res.push(map.get(char));
        }
        else {
            res.push(char);
        }
    }
    return res.join('');
};
