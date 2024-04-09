/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let t = tickets[k], size = tickets.length;
    let time = 0;
    for (let i = 0; i <= k; i++) {
        time += Math.min(tickets[i], t);
    }
    t = t - 1;
    for (let i = k + 1; i < size; i++) {
        time += Math.min(tickets[i], t);
    }
    return time;
};
