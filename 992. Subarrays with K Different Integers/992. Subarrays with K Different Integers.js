/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    let minHeap = new Array(k), heapSize = 0;
    function heapify1(minHeap, ind, heapSize) {
        let parent = Math.floor((ind - 1) / 2);
        if (parent >= 0) {
            if (minHeap[parent][1] < minHeap[ind][1]){
                return;
            }
            let t4;
            t4 = minHeap[parent];
            minHeap[parent] = minHeap[ind];
            minHeap[ind] = t4;
            minHeap[parent][2] = parent;
            minHeap[ind][2] = ind;
            heapify1(minHeap, parent, heapSize);
        }
        return;
    }
    function heapify2(minHeap, ind, heapSize) {
        let child1 = ind * 2 + 1;
        let child2 = ind * 2 + 2;
        let minIndex = ind;
        if (child1 < heapSize) {
            if (minHeap[child1][1] < minHeap[minIndex][1]) {
                minIndex = child1;
            }
            if (child2 < heapSize) {
                if (minHeap[child2][1] < minHeap[minIndex][1]) {
                    minIndex = child2;
                }
            }
        }
        if (minIndex === ind) {
            return;
        }
        let t = minHeap[ind];
        minHeap[ind] = minHeap[minIndex];
        minHeap[minIndex] = t;
        minHeap[ind][2] = ind;
        minHeap[minIndex][2] = minIndex;
        heapify2(minHeap, minIndex, heapSize);
    }
    function deleteFromHeap(minHeap, ind, heapSize) {
        minHeap[ind][2] = -1;
        if (ind === heapSize - 1) {
            return;
        }
        minHeap[ind] = minHeap[heapSize - 1];
        minHeap[ind][2] = ind;
        heapSize--;
        heapify1(minHeap, ind, heapSize);
        heapify2(minHeap, ind, heapSize);
    }
    function insertToHeap(minHeap, heapSize, t) {
        t[2] = heapSize;
        minHeap[heapSize] = t;
        heapSize++;
        heapify1(minHeap, heapSize - 1, heapSize);
    }
    let elMap = new Map();
    let ind1 = 0, ind2 = 0;
    elMap.set(nums[0], [nums[0],0, 0]);
    minHeap[0] = elMap.get(nums[0]);
    heapSize = 1;
    let count = 0;
    while (ind2 < nums.length) {
        if (heapSize < k) {
            if (elMap.has(nums[ind2])) {
                let t = elMap.get(nums[ind2]);
                if (t[2] !== -1) {
                    deleteFromHeap(minHeap, t[2], heapSize);
                    heapSize--;
                }
                t[1] = ind2;
                insertToHeap(minHeap, heapSize, t);
                heapSize++;
            }
            else {
                elMap.set(nums[ind2], [nums[ind2], ind2, -1]);
                insertToHeap(minHeap, heapSize, elMap.get(nums[ind2]));
                heapSize++;
            }
            if (heapSize === k) {
                count += (minHeap[0][1] - ind1 + 1);
            }
            ind2++;
            continue;
        }
        if (elMap.has(nums[ind2])) {
            let t = elMap.get(nums[ind2]);
            if (t[2] !== -1) {
                //elMap.set(nums[ind2], [t[0], ind2, t[2]]);
                t[1] = ind2;
                deleteFromHeap(minHeap, t[2], heapSize);
                heapSize--;
                insertToHeap(minHeap, heapSize, t);
                heapSize++;
                ind2++;
                count += minHeap[0][1] - ind1 + 1;
                continue;
            }
        }
        //count += minHeap[0][1] - ind1 + 1;
        ind1 = minHeap[0][1] + 1;
        //let t = elMap.get(nums[0]);
        deleteFromHeap(minHeap, 0, heapSize);
        heapSize--;
    }
    return count;
};
