// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

let numbers = [10, 15, 3, 7]
const k = 19
result = false;

while (numbers.length > 1) {
    let n = numbers.pop()
    console.log(`${n} - [${numbers}]`)
    for (i = 0; i < numbers.length; i++) {
        console.log(`    ${n} + ${numbers[i]} = ${n + numbers[i]} =>  ${k === n + numbers[i]}`)
        result |= k === n + numbers[i]
    }
}
console.log(result)
