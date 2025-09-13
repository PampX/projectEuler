// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

let a = 1
let b = 2 
let sum = 0
let evenSum = 2


for(;a<4e6;){
    sum = a+b
    a = b
    b = sum
    if(b % 2 ==0){
        evenSum += b
    }
}

console.log(evenSum);
