/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    let size = deck.length;
    let index = new Array(size);
    for (let i = 0; i < size; i++) {
        index[i] = i;
    }
    let t = [];
    let resIndex = [];
    while (index.length !== 0) {
        for (let i = 0; i < index.length; i = i + 2) {
            resIndex.push(index[i]);
            if (i + 1 < index.length) {
                t.push(index[i + 1]);
            }
            else {
                if (t.length !== 0) {
                    t.push(t.shift());
                }
            }
        }
        index = t;
        t = [];
        //console.log(index, t);
    }
    let res = new Array(size);
    deck.sort((a, b) => a - b);
    for (let i = 0; i < size; i++) {
        res[resIndex[i]] = deck[i]; 
    }
    //console.log(res);
    return res;
};
