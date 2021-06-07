class HashTable {
    constructor(size) {
        if (!size || size < 0) {
            throw new Error('Размер должен быть положительным числом');
        }

        this.size = size;
        this.memory = [];
    }

    set(key, value) {
        const hashedKey = hash(key, this.size)
        const existValue = this.getKeyValuePair(key)
        console.log('=== set hashedKey',hashedKey, 'key', key, 'value', value, 'existValue',existValue)
        if(existValue){
            existValue[1] = value
        }else{
            if(this.memory[hashedKey]){
                this.memory[hashedKey].push([key, value])
            }else{
                this.memory[hashedKey] = [[key, value]]
            }
        }
    }

    get(key) {
        const keyValuePair = this.getKeyValuePair(key)
        return keyValuePair ? keyValuePair[1] : keyValuePair
    }

    remove(key) {
        console.log(`=== remove ${key} ===`)
        const hashedKey = hash(key, this.size)
        const positionArr = this.memory[hashedKey]
        console.log('positionArr',positionArr)
        if(positionArr){
            const indexToRemove = positionArr.findIndex((element) => {
                return element[0] === key
            })
            if(indexToRemove !== -1){
                positionArr.splice(indexToRemove,1)
            }
        }
    }

    getKeyValuePair(key) {
        const hashedKey = hash(key, this.size)
        const positionArr = this.memory[hashedKey]
        if(positionArr){
            return positionArr.find((arr) => {
                return arr[0] === key
            })
        }
        return undefined
    }


    showElems(){
        console.log(JSON.stringify(this.memory))
    }

}

// Хеширующая функция.
function hash(key, size) {
    const MAX_LENGTH = 200;

    const start = key.length > MAX_LENGTH ?
        Math.floor((key.length % MAX_LENGTH) / 2) : 0;
    const end = Math.min(key.length, MAX_LENGTH);

    let total = 0;

    for (let i = 0; i < end; i++) {
        const charCode = key.charCodeAt(start + i);
        total = (total + charCode * (i + 1)) % size;
    }

    return total;
}

const hashTable = new HashTable(3)
hashTable.set('helen','twix')
hashTable.set('ded','moped')
hashTable.showElems()
console.log(hashTable.get('ref'))
console.log(hashTable.get('ded'))
hashTable.remove('ded')
console.log(hashTable.get('ded'))
hashTable.set('helen','mercedes')
hashTable.showElems()



