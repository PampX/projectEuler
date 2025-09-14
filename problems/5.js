
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
