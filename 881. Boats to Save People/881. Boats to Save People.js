/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    let ind1 = 0, ind2 = people.length - 1;
    let boatCount = 0;
    while (ind1 < ind2) {
        if (people[ind1] + people[ind2] <= limit) {
            ind1++;
        }
        ind2--;
        boatCount++;
    }
    if (ind1 === ind2) {
        boatCount++;
    }
    return boatCount;
};
