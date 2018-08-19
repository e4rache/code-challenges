/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice


*/
countDuplicates = (str) => {
    chars = str.toLowerCase()
    chars = chars.split('')
    //console.log('    ', chars)

    let n = 0
    while (chars.length > 1) {
        char = chars.pop()
        //console.log(`        ${char} - [${chars}]`)
        if (chars.indexOf(char) >= 0) {
            n++
            chars = chars.filter(item => item !== char)
            //console.log(`               [${chars}]`)
        }
        //console.log(`           ${n}`)
    }
    //console.log('    ', n)
    return n
}

const strings =
    [
        'abcde',
        'aabbcde',
        'aabBcde',
        'indivisibility',
        'Indivisibilities',
        'aA11',
        'ABBA'
    ]

for (str of strings) console.log(`"${str}" -> ${countDuplicates(str)}`)



