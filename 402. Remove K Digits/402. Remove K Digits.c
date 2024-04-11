char *getString(char *res) {
    int i = 0;
    while (res[i] == '0') {
        i++;
    }
    if (i == strlen(res)) {
        char *t;
        t = malloc(2 * sizeof(char));
        t[0] = '0';
        t[1] = '\0';
        return t;
    }
    return res + i;
}

void printArray(char *arr, int arrSize) {
    for (int i = 0; i < arrSize; i++) {
        printf("%c ", arr[i]);
    }
    printf("\n");
}

char* removeKdigits(char* num, int k) {
    char *res;
    int numSize = strlen(num);
    res = malloc((numSize + 1) * sizeof(char));
    int resSize = 0;
    for (int i = 0; i < numSize; i++) {
        if (resSize == 0){
            res[0] = num[i];
            resSize++;
            continue;
        }
        if (num[i] < res[resSize - 1]) {
            while (res[resSize - 1] > num[i]) {
                if (k == 0) {
                    while (i < numSize) {
                        res[resSize] = num[i];
                        i++;
                        resSize++;
                    }
                    res[resSize] = '\0';
                    return getString(res);
                }
                resSize--;
                k--;
                if (resSize == 0) {
                    break;
                }
            }
            res[resSize] = num[i];
            resSize++;
        }
        else {
            res[resSize] = num[i];
            resSize++;
        }
    }
    while (k != 0) {
        resSize--;
        k--;
    }
    res[resSize] = '\0';
    return getString(res);
}
