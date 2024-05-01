/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    function getIndex(word, ch) {
        let index = 0;
        while (index < word.length) {
            if (word[index] === ch) {
                return index;
            }
            index++;
        }
        return index;
    }
    let index = getIndex(word, ch);
    if (index === word.length) {
        return word;
    } 
    //console.log(index);
    let res = word.slice(0, index + 1);
    let t = res.split("");
    //console.log(res, t);
    t = t.reverse();
    res = t.join("") + word.slice(index + 1);
    return res;
};
