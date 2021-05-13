module.exports = function toReadable(number) {
    const numbersMap = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred'
    };
    if (numbersMap[number]) {
        return numbersMap[number];
    }
    let numString = number.toString();

    if (numString.length === 2) {
        return numbersMap[numString[0] * 10] + ' ' + numbersMap[numString[1]];
    }
    if (numString.length === 3) {
        let lastTwoDigits = number % 100;
        if (numString[1] === '0' && numString[2] === '0') {
            return numbersMap[numString[0]] + ' hundred';
        } else if (numbersMap[lastTwoDigits]) {
            return numbersMap[numString[0]] + ' hundred ' + numbersMap[lastTwoDigits];
        } else {
            return numbersMap[numString[0]] + ' hundred ' + numbersMap[numString[1] * 10] + ' ' + numbersMap[numString[2]];
        }
    }
}
