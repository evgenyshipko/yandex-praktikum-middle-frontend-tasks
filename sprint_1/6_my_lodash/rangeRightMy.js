function rangeRightMy(...args) {
    let start = 0
    let end
    let step = 1

    if (args.length === 1) {
        end = args[0]
    }else if(args.length === 2){
        start = args[0]
        end = args[1]
    }else if(args.length === 3){
        start = args[0]
        end = args[1]
        step = args[2]
    }

    return range(start, end, step, true);
}

function range(start= 0, end, step= 1, isRight= false) {
    const arr = []
    if (step === 0){
        for (let i = start; i < end; i = i + 1) {
            arr.push(start)
        }
    }else if(end < 0){
        for (let i = start; i > end; i = i - Math.abs(step)) {
            isRight ? arr.unshift(i) : arr.push(i)
        }
    }else{
        for (let i = start; i < end; i = i + step) {
            isRight ? arr.unshift(i) : arr.push(i)
        }
    }
    return arr
}
console.log(rangeRightMy(4))
console.log(rangeRightMy(-4))
console.log(rangeRightMy(1,5))
console.log(rangeRightMy(0, 20 ,5))
console.log(rangeRightMy(0, -4, -1))
console.log(rangeRightMy(1,4,0))
console.log(rangeRightMy(0))
