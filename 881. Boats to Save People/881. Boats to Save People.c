void merge(int *arr, int low, int mid, int high) {
    int ind1 = low, ind2 = mid + 1, ind = 0, t[high - low + 1];
    while (ind1 <= mid && ind2 <= high) {
        if (arr[ind1] < arr[ind2]) {
            t[ind] = arr[ind1];
            ind1++;
        }
        else {
            t[ind] = arr[ind2];
            ind2++;
        }
        ind++;
    } 
    while (ind1 <= mid) {
        t[ind] = arr[ind1];
        ind1++;
        ind++;
    }
    while (ind2 <= high) {
        t[ind] = arr[ind2];
        ind2++;
        ind++;
    }
    for (ind1 = low, ind = 0; ind1 <= high; ind1++, ind++) {
        arr[ind1] = t[ind];
    }
}

void sort(int *arr, int low, int high) {
    if (low < high) {
        int mid = (low + high) / 2;
        sort(arr, low, mid);
        sort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
}

int numRescueBoats(int* people, int peopleSize, int limit){
    sort(people, 0, peopleSize - 1);
    int min = 0, i = 0, j = peopleSize - 1;
    while (i < j)
    {
        if (people[i] + people[j] <= limit)
        {
            i++;
        }
        min++;
        j--;
    }
    if (i == j)
    {
        min++;
    }
    return min;
}
