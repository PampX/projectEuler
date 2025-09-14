//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumOfSquares(number){
    let sum = 0
    for (let i = 0; i <= number; i++) {
        sum += i**2
    }
    return sum
}

function sqareOfSum(number){
    let sum = 0
    for (let i = 0; i <= number; i++) {
        sum += i
    }
    return sum**2
}


let num = 100
let diff = sqareOfSum(num) - sumOfSquares(num)

console.log(diff);
