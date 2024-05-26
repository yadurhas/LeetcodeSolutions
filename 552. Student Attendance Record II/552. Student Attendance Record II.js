/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    let L0A0, L1A0, L2A0, L0A1, L1A1, L2A1; // allArrays
    L0A0 = new Array(n);
    L1A0 = new Array(n);
    L2A0 = new Array(n);
    L0A1 = new Array(n);
    L1A1 = new Array(n);
    L2A1 = new Array(n);
    L0A0[0] = 1;
    L1A0[0] = 0;
    L2A0[0] = 0;
    L0A1[0] = 0;
    L1A1[0] = 0;
    L2A1[0] = 0;
    function add(...args){
        /*if (args.length === 0) {
            throw new Error("No Arguments Provided!!!");
        }*/
        let res = 0;
        for (let i = 0; i < args.length; i++) {
            res += args[i];
            res %= 1000000007;
        }
        return res;
    }

    for (let i = 1; i <= n; i++) {
        L0A0[i] = add(L0A0[i - 1], L1A0[i - 1], L2A0[i - 1] /* add P */);
        L1A0[i] = L0A0[i - 1];
        L2A0[i] = L1A0[i - 1];
        L0A1[i] = add(L0A1[i - 1], L1A1[i - 1], L2A1[i - 1]/* add P */
                     ,L0A0[i - 1], L1A0[i - 1], L2A0[i - 1]/* add A */);
        L1A1[i] = L0A1[i - 1];
        L2A1[i] = L1A1[i - 1];
    }
    return add(L0A0[n], L1A0[n], L2A0[n], L0A1[n], L1A1[n], L2A1[n]);
};
