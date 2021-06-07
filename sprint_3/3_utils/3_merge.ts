type Indexed<T = unknown> = {
    [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
    const leftKeys = Object.keys(lhs)
    const rightKeys = Object.keys(rhs)

    leftKeys.forEach((leftKey) => {
        const leftData = lhs[leftKey]
        if(rightKeys.includes(leftKey)){
            const rightData = rhs[leftKey]
            if(leftData instanceof Object && rightData instanceof Object){
                lhs[leftKey] = merge(leftData, rightData)
            }else{
                lhs[leftKey] = rightData
            }
        }
    })

    rightKeys.forEach((rightKey) => {
        const commonKeys = Object.keys(lhs)
        if(!commonKeys.includes(rightKey)){
            lhs[rightKey] = rhs[rightKey]
        }
    })

    return lhs
}

export default merge

console.log(merge({a: {b: {a: 2}}, d: 5}, {a: {b: {c: 1}}}))
/*
{
	a: {
		b: {
			a: 2,
			c: 1,
		}
	},
	d: 5,
}
*/
