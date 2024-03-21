/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

void traverse(struct ListNode* node, struct ListNode* prev, struct ListNode **res) {
    if (node != NULL) {
        traverse(node -> next, node, res);
        node -> next = prev;
        return;
    }
    *res = prev;
}

struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode *res;
    traverse(head, NULL, &res);
    return res;
}
