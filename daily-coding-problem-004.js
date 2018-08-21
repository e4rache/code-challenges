/*

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

*/

findNumber = arr =>
    arr.filter(v => v <= 0 ? false : true)
        .sort()
        .reduce((acc, val) => acc === val ? ++acc : acc, 1)

let arr
arr = [3, 4, -1, 1]
console.log(findNumber(arr))
arr = [1, 2, 0]
console.log(findNumber(arr))
arr = [4, 2, 4, 1]
console.log(findNumber(arr))
