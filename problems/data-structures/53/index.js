/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum;

    for (let i = 0; i < nums.length; i++) {
        let contSum = nums[i];
        let j = i + 1;
        while (contSum < sum && nums[j] !== undefined) {
            constSum += nums[j];
            j++;
        }
    }

    return sum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
