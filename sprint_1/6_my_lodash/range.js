function range(...args) {

    let start = 0
    let end
    let step = 1
    let isRight = false

    if (args.length === 1) {
        end = args[0]
    }else if(args.length === 2){
        start = args[0]
        end = args[1]
    }else if(args.length === 3){
        start = args[0]
        end = args[1]
        step = args[2]
    } else if(args.length === 4){
        start = args[0]
        end = args[1]
        step = args[2]
        isRight = args[3]
    }

    const arr = []
    if (step === 0){
        for (let i = start; i < end; i = i + 1) {
            arr.push(start)
        }
    }else{
        if (isRight){
            if(end < 0){
                for (let i = end + step; i < start + step; i = i + Math.abs(step)) {
                    arr.push(i)
                }
            }else{
                for (let i = end - step; i > start - step; i = i - step) {
                    arr.push(i)
                }
            }
        }else{
            if(end < 0){
                for (let i = start; i > end; i = i - Math.abs(step)) {
                    arr.push(i)
                }
            }else{
                for (let i = start; i < end; i = i + step) {
                    arr.push(i)
                }
            }
        }
    }
    return arr
}

console.log(range(4))
console.log(range(-4))
console.log(range(1,5))
console.log(range(0, 20 ,5))
console.log(range(0, -4, -1))
console.log(range(1,4,0))
console.log(range(0))
