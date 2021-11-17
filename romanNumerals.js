// Roman Numerals
// Difficulty
// Medium

// Concepts
// General, Math


// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

// For reference, these are the building blocks for how we encode numbers with Roman numerals:

// Decimal

// Roman

// 1

// I

// 5

// V

// 10

// X

// 50

// L

// 100

// C

// 500

// D

// 1,000

// M

// For example:

// toRoman(5)
// 'V'

// toRoman(267)
// 'CCLXVII'
// Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

// For example:

// toRoman(99)
// 'LXXXXVIIII'


function toRoman(num) {
    let roman = ''
    let numString = String(num)

    const romanDigit = {
        1: 'I', 
        5: 'V', 
        10: 'X', 
        50: 'L', 
        100: 'C', 
        500: 'D'
    }

    if (numString.length === 4) {
        return 'M'
    }

    if (numString.length === 3) {
        let current = parseInt(numString[0])
        if (current >= 5) {
            roman += romanDigit[500]
            current -= 5
        }
        for (let i = current; i > 0; i--) {
            roman += romanDigit[100]
        }
        numString = numString.slice(-2)
    }

    if (numString.length === 2) {
        let current = parseInt(numString[0])
        if (current >= 5) {
            roman += romanDigit[50]
            current -= 5
        }
        for (let i = current; i > 0; i--) {
            roman += romanDigit[10]
        }
        numString = numString.slice(-1)
    }

    if (numString.length === 1) {
        let current = parseInt(numString[0])
        if (current >= 5) {
            roman += romanDigit[5]
            current -= 5
        }
        for (let i = current; i > 0; i--) {
            roman += romanDigit[1]
        }
    }

    return roman
}