type StringIndexed = Record<string, unknown>;

const obj: StringIndexed = {
    key: 1,
    key2: 'test',
    key3: false,
    key4: true,
    key5: [1, 2, 3],
    key6: {a: 1},
    key7: {b: {d: 2}},
};

function queryStringify(data: StringIndexed): string | never {
    if(!(data instanceof Object)){
        throw new Error('input must be an object')
    }
    let index = 0

    const keyValuePairs = Object.keys(data).reduce((acc, key) => {
        acc.push(... getKeyValuePairs(key,data[key]))
        return acc
    }, [])

    console.log('keyValuePairs',keyValuePairs)

    return keyValuePairs.reduce((acc, keyValuePair) => {
        const key = keyValuePair.key
        const value = keyValuePair.value
        acc = acc + `${key}=${value}`
        if(index !== keyValuePairs.length - 1){
            acc = acc + '&'
        }
        index++
        return acc
    }, '')
}


function getKeyValuePairs(key: string, data: unknown): StringIndexed[] {
    if(Array.isArray(data)){
        return getKeyValuePairsFromArray(key, data)
    }else if(data instanceof Object){
        return Object.keys(data).reduce((accumulator, innerKey) => {
            accumulator.push(...getKeyValuePairs(`${key}[${innerKey}]`, data[innerKey]))
            return accumulator
        }, [])
    }else{
        return [{key: key, value: data}]
    }
}


function getKeyValuePairsFromArray(key: string, arr: unknown[]): StringIndexed[]{
    let index = 0
    return arr.reduce((acc, value) => {
        acc.push({key: `${key}[${index}]`, value: value})
        index++
        return acc
    }, [])
}

export default queryStringify


//console.log(getKeyValuePairs('key7', {b: {d: 2, hgh: 17}, makarenko: 'hui'}))

console.log(queryStringify(obj)); // 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'
