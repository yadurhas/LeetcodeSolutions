/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let arr = s.split("");
    console.log(arr);
    let steps = 0;
    function addOne(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === '0') {
                arr[i] = '1';
                return;
            } 
            arr[i] = '0';
        }
        arr.unshift('1');
    }
    while (arr.length != 1) {
        steps++;
        if (arr[arr.length - 1] === '0') {
            arr.pop();
            continue;
        }
        addOne(arr);
    }
    return steps;
 };
