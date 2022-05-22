// https://leetcode.com/problems/contains-duplicate/submissions/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const found = {};
    for (let i = 0; i < nums.length; i++) {
        if (found[nums[i]]) return true;
        found[nums[i]] = true;
    }

    return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 5, 5]));
