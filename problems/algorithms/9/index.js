/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numArray = [];

    if (x < 10 && x >= 0) return true;
    if (x < 0) return false;

    let i = 10;
    while (x % i !== x) {
        let remainder = x % i;
        numArray.push(remainder);

        console.log({before: x});
        x = x - remainder;
        console.log({after: x});

        x /= 10;
        console.log({afterafter: x});

        console.log({i});
    }

    numArray.push(x);

    console.log({numArray});

    for (let i = 0; i < numArray.length; i++) {
        const first = numArray[i];
        const second = numArray[numArray.length - i - 1];
        if (first !== second) {
            console.log(`Failed at index: ${i}: ${first} !== ${second}`);
            return false;
        }
    }

    return true;
};

console.log({
    "1010": isPalindrome(1010),
    "1001": isPalindrome(1001),
    "1000": isPalindrome(1000),
    "121": isPalindrome(121),
    "123": isPalindrome(123),
    "25": isPalindrome(25),
    "10": isPalindrome(10),
    "-10": isPalindrome(-10),
    "0": isPalindrome(0)
});