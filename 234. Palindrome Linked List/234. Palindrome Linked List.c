/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
/*
brute force: store in an array and check for palindrome

*/

int getSize (struct ListNode *node) {
    int count = 0;
    while (node != NULL) {
        count++;
        node = node -> next;
    }
    return count;
}


bool isPalindrome(struct ListNode* head) {
    int size = getSize(head);
    int arr[size], i = 0, j;
    while (head != NULL) {
        arr[i] = head -> val;
        i++;
        head = head -> next;
    }
    i = 0;
    j = size - 1;
    while (i < j) {
        if (arr[i] != arr[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
