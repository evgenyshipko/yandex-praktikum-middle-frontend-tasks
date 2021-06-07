type StepFn = <T extends number | undefined>(val?: T) => T extends number ? StepFn : number;

function add(): number
function add(val: number): StepFn
function add(val?: number){
    let memoiz = 0
    if(!val){
        return memoiz
    }else{
        memoiz += val
    }
    return ((value?) => {
        if(typeof value === 'number'){
            memoiz += value
            return add(memoiz)
        }
        return memoiz
    }) as StepFn
}

export default add

const stepFn = add(1)(2)
const result = stepFn()

add(1)(2)()
add()

//console.log(add()) // => 0
console.log(add(1)(5)(10)())
console.log(add(1)(2)()) // => 3



// add(n0)(n1)...(nk)() => n0+n1+...+nk
