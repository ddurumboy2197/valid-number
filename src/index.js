function isValidNumber(s) {
    let number = '';
    let sign = 1;
    let dot = false;
    let e = false;
    let eSign = 1;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === 'e') {
            if (e) return false;
            e = true;
            continue;
        }

        if (char === '+' || char === '-') {
            if (e) return false;
            if (char === '-') sign = -1;
            continue;
        }

        if (char === '.') {
            if (dot) return false;
            dot = true;
            continue;
        }

        if (!isNaN(char)) {
            number += char;
            continue;
        }

        return false;
    }

    if (e) {
        let eNumber = '';
        let eSign = 1;

        for (let i = 0; i < s.length; i++) {
            let char = s[i];

            if (char === '+' || char === '-') {
                if (char === '-') eSign = -1;
                continue;
            }

            if (!isNaN(char)) {
                eNumber += char;
                continue;
            }

            return false;
        }

        if (eNumber === '') return false;

        let eNumberFloat = parseFloat(eNumber);
        if (isNaN(eNumberFloat)) return false;

        let numberFloat = parseFloat(number);
        if (isNaN(numberFloat)) return false;

        return numberFloat * eSign * Math.pow(10, eSign * eNumberFloat) > 0;
    }

    let numberFloat = parseFloat(number);
    if (isNaN(numberFloat)) return false;

    return numberFloat > 0;
}

console.log(isValidNumber("0")); // true
console.log(isValidNumber(" 0.1 ")); // true
console.log(isValidNumber("abc")); // false
console.log(isValidNumber("1 a")); // false
console.log(isValidNumber("2e10")); // true
console.log(isValidNumber(" -90e3")); // true
console.log(isValidNumber(" 1e")); // false
console.log(isValidNumber("e3")); // false
console.log(isValidNumber(" 6e-1")); // true
console.log(isValidNumber(" 99e2")); // true
console.log(isValidNumber("53.5e93")); // true
console.log(isValidNumber(" --6 "); // false
console.log(isValidNumber("-+3")); // false
console.log(isValidNumber("95a54e53")); // false
