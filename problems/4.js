
function isPalindrome(number) {
    let digits = number.toString().split('')

    for (let i = 0; i < digits.length; i++) {
        let a = digits[i]
        let b = digits[digits.length - 1 - i]
        if (a == b) {
            continue
        } else {
            return false
        }
    }
    return true
}

let start = 100
let range = 999
let maxPalindrome = 0
for (let i = start; i <= range; i++) {
    for (let y = start; y <= range; y++) {
        if (isPalindrome(i*y)) {
            if (maxPalindrome < i*y) {
                maxPalindrome = i*y
                console.log(i);
                console.log(y);
                
            }
        }
    }
}
console.log(maxPalindrome);
