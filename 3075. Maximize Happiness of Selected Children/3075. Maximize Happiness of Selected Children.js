/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a, b) => b - a);
    let sum = 0, t;
    for (let i = 0; i < k; i++) {
        t = (happiness[i] - i);
        if (t < 0) {
            return sum;
        }
        sum += t;
    }
    return sum;
};
