/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    function convert(deadends) {
        let res = new Set(), t;
        for (let i = 0; i < deadends.length; i++) {
            t = 0;
            for (let j = 0; j < 4; j++) {
                t = t * 10 + deadends[i].charCodeAt(j) - 48;
            }
            res.add(t);
        }
        return res;
    }
    function getDigits(num, digitCount) {
        let digits = [];
        for (let i = 0; i < digitCount; i++) {
            digits.push(num % 10);
            num = Math.floor(num / 10);
        }
        return digits.reverse();
    }
    deadends = convert(deadends);
    if (deadends.has(0)) {
        return -1;
    }
    if (target === '0000') {
        return 0;
    }
    let queueSet = convert([target]);
    let queue = Array.from(queueSet);
    let queue2 = [0];
    let ind1 = 0, ind2 = 1, t, t1, t2, digits, eq = [1000, 100, 10, 1];
    while (ind1 < ind2) {
        t = queue[ind1];
        digits = getDigits(t, 4);
        //console.log(queue, digits);
        for (let i = 0; i < 4; i++) {
            t1 = (digits[i] !== 0) ? t - eq[i] : t + 9 * eq[i]; 
            t2 = (digits[i] !== 9) ? t + eq[i] : t - 9 * eq[i];
            if (t1 === 0 || t2 === 0) {
                return queue2[ind1] + 1;
            }
            if (!deadends.has(t1) && !queueSet.has(t1)) {
                queue.push(t1);
                queueSet.add(t1);
                queue2.push(queue2[ind1] + 1);
                ind2++;
            }
            if (!deadends.has(t2) && !queueSet.has(t2)) {
                queue.push(t2);
                queueSet.add(t2);
                queue2.push(queue2[ind1] + 1);
                ind2++;
            }
        }
        ind1++;
    }
    //console.log(queue);
    return -1;
};
