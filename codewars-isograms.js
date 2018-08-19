/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
*/

isIsogram = (str) => {
    chars = str.toLowerCase()
    chars = chars.split('')
    //console.log('    ', chars)

    let result = true
    while (chars.length > 1 && result) {
        char = chars.pop()
        //console.log(`        ${char} - [${chars}]`)
        if (chars.indexOf(char) >= 0) result = false
    }
    return result
}

dataSet = [
    "Dermatoglyphics",
    "aba",
    "moOse",
    ""
]

for (str of dataSet) {
    console.log(`'${str}' == ${isIsogram(str)}`)
}
