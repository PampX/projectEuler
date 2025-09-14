// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ? 

function isDivisibleBy20th(number){
    for (let i = 20; i > 0; i--) {
        if (number % i != 0) {
            return false
        }
    }
    return true
}
console.log("begin");

for (let i = 20; i < 1e9; i += 20) {
    if (isDivisibleBy20th(i)) {
        console.log(i);
        break
    }
    
}
console.log("done");
