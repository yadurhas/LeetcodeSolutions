/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
   let freq1 = new Array(26).fill(0);
   let freq2 = new Array(26).fill(0);
   function getFreq(str, freq) {
    for (let i = 0; i < str.length; i++) {
        freq[str.charCodeAt(i) - 97]++;
    }
   } 
   getFreq(s, freq1);
   getFreq(t, freq2);
   freq1.sort((a, b) => a - b);
   freq2.sort((a, b) => a - b);
   for (let i = 0; i < 26; i++) {
    if (freq1[i] != freq2[i]) {
        return false;
    }
   }
   return true;
};
