/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let mat = new Array(matrix.length);
    for (let i = 0; i < mat.length; i++) {
        mat[i] = new Array(matrix[i].length);
        mat[i][0] = matrix[i][0] === '0' ? 0 : 1;
        for (let j = 1; j < mat[i].length; j++) {
            mat[i][j] = 0;
            if (matrix[i][j] === '1') {
                mat[i][j] = mat[i][j - 1] + 1;
            }
        }
    }
    let maxArea = 0, t1, t2, t3, t4;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            t2 = 1;
            t4 = i;
            t3 = mat[i][j];
            while (t4 >= 0) {
                t3 = Math.min(mat[t4][j], t3);
                if (t3 === 0) {
                    break;
                }
                t1 = t2 * t3;
                maxArea = Math.max(maxArea, t1);
                t2++;
                t4--;
            }
        }
    }
    return maxArea;
};
