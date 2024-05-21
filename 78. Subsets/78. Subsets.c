/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
/*

memcpy - copies bytes of data from one location to another

First learned here, beware of that Sahruday

*/


int getResSize(int n) {
    int val = 1;
    for (int i = 0; i < n; i++) {
        val = val * 2;
    }
    return val;
}

void traverse(int **res, int *resSize, int **returnColSizes, int *nums, int ind, int numsSize, int *arr, int arrSize) {
    if (ind == numsSize) {
        int *t;
        t = malloc(arrSize * sizeof(int));
        memcpy(t, arr, arrSize * sizeof(int));
        returnColSizes[0][*resSize] = arrSize;
        res[*resSize] = t;
        *resSize += 1;
        return;
    }
    traverse(res, resSize, returnColSizes, nums, ind + 1, numsSize, arr, arrSize);
    arr[arrSize] = nums[ind];
    traverse(res, resSize, returnColSizes, nums, ind + 1, numsSize, arr, arrSize + 1);
}

int** subsets(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    int **res, resSize = getResSize(numsSize);
    res = malloc(resSize * sizeof(int *));
    *returnSize = 0;
    *returnColumnSizes = malloc(resSize * sizeof(int));
    int *arr = malloc(numsSize * sizeof(int));
    traverse(res, returnSize, returnColumnSizes, nums, 0, numsSize, arr, 0);
    printf("here %d\n", resSize);
    return res;
}
