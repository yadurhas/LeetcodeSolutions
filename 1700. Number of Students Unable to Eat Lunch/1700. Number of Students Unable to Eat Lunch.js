/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let count1 = 0, count2 = 0, size = students.length;
    for (let i  = 0; i < size; i++) {
        count1 += students[i];
        count2 += sandwiches[i];
    }
    if (count1 === count2) {
        return 0;
    }
    if (count1 < count2) {
        for (let i = 0; i < size; i++) {
            if (sandwiches[i] === 1) {
                count1--;
                if (count1 === -1) {
                    return size - i;
                }
            }
        }
    }
    for (let i = 0; i < size; i++) {
        if (sandwiches[i] === 0) {
            count1++;
            if (count1 === size + 1) {
                return size - i;
            }
        }
    }
};
