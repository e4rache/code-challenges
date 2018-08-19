/*
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221
*/

descendingOrder = n => {
    let digits = '' + n
    digits = digits.split('');
    digits.sort().reverse()
    // I could have used .join() instead
    let iterations = digits.length
    let result = 0
    for (let i = 0; i < iterations; i++) {
        const factor = 10 ** i
        let int = digits.pop();
        int = parseInt(int) * factor
        result += int
    }
    return result
}

console.log(descendingOrder(3457512))
