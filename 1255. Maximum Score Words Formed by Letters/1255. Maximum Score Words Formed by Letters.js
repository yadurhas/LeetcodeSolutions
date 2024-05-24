/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, scores) {
    let maxScore = Number.MIN_SAFE_INTEGER;
    let remL = new Array(26).fill(0);
    for (let i = 0; i < letters.length; i++) {
        remL[letters[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    let t;
    for (let i = 0; i < words.length; i++) {
        t = new Array(26).fill(0);
        for (let j = 0; j < words[i].length; j++) {
            t[words[i].charCodeAt(j) - 'a'.charCodeAt()]++;
        }
        words[i] = t;
    }
    function possibleWord(word, letters) {
        for (let i = 0; i < 26; i++) {
            if (word[i] > letters[i]) {
                return false;
            }
        }
        return true;
    }
    function traverse(words, ind, score, remL) {
        if (ind === words.length) {
            if (score > maxScore) {
                maxScore = score;
            }
            return;
        }
        traverse(words, ind + 1, score, remL);
        if (possibleWord(words[ind], remL)) {
            for (let i = 0; i < 26; i++) {
                remL[i] -= words[ind][i];
                score += words[ind][i] * scores[i];
            }
            traverse(words, ind + 1, score, remL);
            for (let i = 0; i < 26; i++) {
                remL[i] += words[ind][i];
            }
        }
    }
    traverse(words, 0, 0, remL);
    return maxScore;
};
