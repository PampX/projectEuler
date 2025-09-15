// What is the 10 001st prime number?
function isPrime(number){
    for (let i = 2; i*i <= number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

let compteur = 0
let premier = 0
for (let i = 2;compteur < 10_001;i++) {
    if (isPrime(i)) {
        compteur++
        premier = i
    }
}
console.log(compteur);
console.log(premier);
