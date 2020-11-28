
console.log(
    intersection(
        [[8, 12], [17, 22]],
        [[5, 11], [14, 18], [20, 23]]
    ) // [[8, 11], [17, 18], [20, 22]]
)

console.log(
    intersection(
        [[9, 15], [18, 21]],
        [[10, 14], [21, 22]]
    ) // [[10, 14]]
)


function intersection(user1, user2) {
    const result = []
    user1.forEach((mask) => {
        const maskStart = mask[0]
        const maskEnd = mask[1]
        user2.forEach((interval) => {
            const intervalStart = interval[0]
            const intervalEnd = interval[1]

            let start
            if(intervalStart < maskStart && intervalEnd > maskStart){
                start = maskStart
            }
            if(maskStart < intervalStart && maskEnd > intervalStart){
                start = intervalStart
            }
            if(start){
                const end = maskEnd > intervalEnd ? intervalEnd : maskEnd
                result.push([start, end])
            }
        })
    })
    return result
}
