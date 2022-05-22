// https://leetcode.com/problems/n-th-tribonacci-number/submissions/

/**
 * @param {number} n
 * @return {number}
 */
const F = [0, 1, 1];
var tribonacci = function (n) {
    if (n > 1 && !F[n]) {
        F[n] =
            (F[n - 1] || tribonacci(n - 1)) +
            (F[n - 2] || tribonacci(n - 2)) +
            (F[n - 3] || tribonacci(n - 3));
    }

    return F[n];
};

console.log({ trib: tribonacci(25) });
