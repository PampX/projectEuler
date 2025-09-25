function next(num){
    if (num % 2 == 0) {
        return num/2
    } else {
        return 3*num+1
    }
}

function getList(num){
    let list = []
    list.push(num)
    let begin = num
    while (begin > 1) {
        begin = next(begin)
        list.push(begin)
    }
    return list
}

let maxLength = 0
let maxNum = 0
let maxList = []
for (let i = 1; i < 1_000_000; i++) {
    
    let result = getList(i)
    if (result.length > maxLength) {
        maxLength = result.length
        maxNum = i
        maxList = result
    }
    
}

console.log(maxNum);
console.log(maxLength);
