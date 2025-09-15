// There exists exactly one Pythagorean triplet for which a + b + c = 1000 . Find the product abc.

let max = 500
for (let a = 0; a < max; a++) {
    for (let b = 0; b < max; b++) {
        for (let c = 0; c < max; c++) {
            if (a < b && b < c) {
                if (a**2 + b**2 == c**2) {
                    if(a+b+c == 1000){
                        console.log("a:"+a+",b:"+b+",c:"+c)
                        console.log(a*b*c);
                    }
                }
            }
            
        }
    }
    
}