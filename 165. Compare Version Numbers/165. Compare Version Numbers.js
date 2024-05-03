/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    function getRevisions(version) {
        let arr = version.split('.');
        let revisions = new Array(arr.length);
        function getRevision(str) {
            let num = 0;
            for (let i = 0; i < str.length; i++) {
                num = num * 10 + str.charCodeAt(i) - '0'.charCodeAt();
            }
            return num;
        }
        for (let i = 0; i < arr.length; i++) {
            revisions[i] = getRevision(arr[i]);
        }
        return revisions;
    }
    function compareRevisions(revisions1, revisions2) {
        let ind = 0, size1 = revisions1.length, size2 = revisions2.length; 
        while (ind < size1 && ind < size2) {
            if (revisions1[ind] < revisions2[ind]) {
                return -1;
            }
            else if (revisions1[ind] > revisions2[ind]){
                return 1;
            }
            ind++;
        }
        if (size1 === size2) {
            return 0;
        }
        if (size1 < size2) {
            while (ind < size2) {
                if (revisions2[ind] > 0) {
                    return -1;
                }
                ind++;
            }
            return 0;
        }
        if (size1 > size2) {
            while (ind < size1) {
                if (revisions1[ind] > 0) {
                    return 1;
                }
                ind++;
            }
            return 0;
        }
    }
    let revisions1, revisions2;
    revisions1 = getRevisions(version1);
    revisions2 = getRevisions(version2);
    return compareRevisions(revisions1, revisions2);
};
