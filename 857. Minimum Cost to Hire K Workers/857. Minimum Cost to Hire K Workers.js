/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
    let wpq = [];
    for (let i = 0; i < quality.length; i++) {
        wpq.push([wage[i], quality[i]]);
    }
    //comparing wage[i] / quality[i];
    function compareFn(a, b) {
        if (a[0] * b[1] > a[1] * b[0]) {
            return 1;
        }
        if (a[0] * b[1] < a[1] * b[0]) {
            return -1;
        }
        return 0;
    }
    wpq.sort(compareFn);
    let maxHeap = [], heapSum = 0, minCost = Number.MAX_SAFE_INTEGER, cost;
    function addToHeap(heap, val) {
        heap.push(val);
        let ind = heap.length - 1;
        if (ind === 0) {
            return;
        }
        let parent = Math.floor((ind - 1) / 2), t;
        while (heap[parent] < heap[ind]) {
            t = heap[ind];
            heap[ind] = heap[parent];
            heap[parent] = t;
            ind = parent;
            if (ind === 0) {
                break;
            }
            parent = Math.floor((ind - 1) / 2);
        }
    }
    function popAndAdd(heap, val) {
        let ind = 0;
        heap[ind] = val;
        function traverse(heap, ind) {
            let lInd = 2 * ind + 1;
            let rInd = 2 * ind + 2;
            let maxInd = ind;
            if (rInd < heap.length) {
                if (heap[rInd] > heap[maxInd]) {
                    maxInd = rInd;
                }
            } 
            if (lInd < heap.length) {
                if (heap[lInd] > heap[maxInd]) {
                    maxInd = lInd;
                }
            }
            if (maxInd === ind) {
                return;
            }
            let t = heap[maxInd];
            heap[maxInd] = heap[ind];
            heap[ind] = t;
            traverse(heap, maxInd);
        } 
        traverse(heap, ind);
    }
    for (let i = 0; i < k - 1; i++) {
        addToHeap(maxHeap, wpq[i][1]);
        heapSum += wpq[i][1];
    }
    /*for (let i = 0; i < quality.length; i++) {
        quality[i] = wpq[i][1];
        wage[i] = wpq[i][0];
    }*/
    //console.log(wage);
    //console.log(quality);
    //console.log(heapSum);
    for (let i = k - 1; i < quality.length; i++) {
        //console.log(maxHeap);
        cost = ((heapSum + wpq[i][1]) * (wpq[i][0]));
        cost = cost / wpq[i][1];
        if (cost < minCost) {
            minCost = cost;
        }
        if (wpq[i][1] < maxHeap[0]){
            ////console.log("here");
            heapSum += (wpq[i][1] - maxHeap[0]);
            popAndAdd(maxHeap, wpq[i][1]);
        }
    }
    return minCost;
};
