// What is the largest prime factor of the number 600851475143
// 600_851_475_143
let goal = 600851475143;
let factor = 2;
let maxPrime = 1;

while (goal > 1) {
    if (goal % factor === 0) {
        maxPrime = factor; // on garde ce facteur
        goal /= factor;    // on divise goal par ce facteur
    } else {
        factor++;          // sinon on passe au suivant
    }
}

console.log(maxPrime); // Affiche le plus grand facteur premier

