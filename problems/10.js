// Find the sum of all the primes below two millions

function isPrime(number){
    for (let i = 2; i*i <= number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

let sum = 0
for (let i = 2; i <= 2e6; i++) {
    if (isPrime(i)) {
        sum += i
    }
    
}
console.log(sum);
