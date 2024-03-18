/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => (a[0] - b[0] != 0) ? (a[0] - b[0]) : (a[1] - b[1]));
    console.log(points);
    let i = 0, size = points.length, count = 0;
    let flag = false, x2; //x1 not required
    while (i < size) {
        if (flag === false) {
            count++;
            x2 = points[i][1];
            flag = true;
        }
        else {
            if (points[i][0] <= x2) {
                if (points[i][1] < x2) {
                    x2 = points[i][1];
                }
            }
            else {
                flag = false;
                i--;
            }
        }
        i++;
    }
    return count;   
};
