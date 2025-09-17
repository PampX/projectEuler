function countFactors(num) {
    let count = 0;
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            count += (i * i === num) ? 1 : 2; // éviter double comptage si carré parfait
        }
    }
    return count;
}

let enough = true;
let x = 0;

for (let i = 1; enough; i++) {
    x += i; // nombre triangulaire
    let facCount = countFactors(x);
    if (facCount >= 500) {
        enough = false;
        console.log("Nombre triangulaire:", x);
        console.log("Nombre de facteurs:", facCount);
    }
}
