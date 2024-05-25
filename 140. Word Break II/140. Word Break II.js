/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let sentences = []
    function isWord(letters) {
        let t = letters.join("");
        if (wordDict.includes(t)) {
            return true;
        } 
        return false;
    }
    function getSentence(arr) {
        let res;
        res = arr[0].join("");
        for (let i = 1; i < arr.length; i++) {
            res += ' ' + arr[i].join("");
        }
        return res;
    }
    function traverse(s, arr, ind) {
        if (ind === s.length) {
            if (isWord(arr[arr.length - 1])) {
                sentences.push(getSentence(arr));
            }
            return;
        }
        if (ind === 0) {
            arr.push([s[ind]]);
            traverse(s, arr, ind + 1);
            return;
        }
        arr[arr.length - 1].push(s[ind]);
        traverse(s, arr, ind + 1);
        arr[arr.length - 1].pop();
        if (isWord(arr[arr.length - 1])) {
            arr.push([s[ind]]);
            traverse(s, arr, ind + 1);
            arr.pop();
        }
    }
    traverse(s, [], 0);
    return sentences;
};
