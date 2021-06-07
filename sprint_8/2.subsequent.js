/*
Подотрезок с суммой X
Дан массив целых чисел. Нужно найти и вернуть количество не пустых подотрезков (непрерывных подпоследовательностей)
с заданной суммой k. Если это невозможно, функция должна вернуть 0.
*/

// ([1, 1, 1], 2) -> 2
function subarraySum(nums, sum) {

    const subarrays = {}

    for(let i = 0; i < nums.length; i++){

        const num = nums[i]

        if(num === sum){
            subarrays[`${i}${i}`] = 1
        }

        let localSum = num

        for(let j = 0; j < nums.length; j++){
            if(i < j){
                localSum += nums[j]
                if(localSum === sum){
                    const key = `${i}${j}`
                    subarrays[key] = 1
                    break
                }
            }
        }
        console.log('i',i)

    }

    console.log(subarrays)
    return Object.keys(subarrays).length
}

console.log(subarraySum([1, 2, 3], 3)) //2
