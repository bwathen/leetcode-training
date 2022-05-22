// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const binSearch = (nums, target, left, right) => {
        if (left > right) {
            return -1;
        }

        const middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (target < nums[middle]) {
            return binSearch(nums, target, left, middle - 1);
        } else {
            return binSearch(nums, target, middle + 1, right);
        }
    };

    return binSearch(nums, target, 0, nums.length);
};

console.log(search([5], 5));
