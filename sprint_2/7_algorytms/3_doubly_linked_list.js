class DoublyLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // Добавляет элемент в список.
    // Если указан индекс - добавляет по индексу,
    // в противном случае добавляет в конец.
    // Если индекс за пределами — кидает ошибку.
    add(value, index) {
        const node = createNode(value);
        if(this.size === 0){
            this.tail = node
            this.head = node
        }else{
            if(index){
                const afterNode = this.searchByIndex(index)
                const beforeNode = afterNode.prev
                if(beforeNode){
                    beforeNode.next = node
                }
                afterNode.prev = node
                node.next = afterNode
                node.prev = beforeNode
            }else{
                this.tail.next = node
                node.prev = this.tail
                this.tail = node
            }
        }
        this.size = this.size + 1
    }

    // Удаляет элемент из списка по значению.
    // Удаляет только первый найденный элемент.
    // Если элемент не найден, ничего делать не нужно.
    removeByValue(value) {
        const nodeToRemove = this.searchByValue(value)
        if(nodeToRemove){
            this.removeNode(nodeToRemove)
        }
    }

    // Удаляет элемент из списка по индексу.
    // Если индекс за пределами — кидает ошибку.
    removeByIndex(index) {
        const nodeToRemove = this.searchByIndex(index)
        if(nodeToRemove){
            this.removeNode(nodeToRemove)
        }
    }

    removeNode(node){
        const previousNode = node.prev
        const nextNode = node.next

        if(previousNode){
            previousNode.next = nextNode
        }
        if(nextNode){
            nextNode.prev = previousNode
        }

        if(node === this.head){
            this.head = nextNode
        }
        if(node === this.tail){
            this.tail = previousNode
        }

        node.prev = null
        node.next = null
        this.size = this.size - 1
    }

    // Ищет элемент в списке по индексу.
    // Если индекс за пределами — кидает ошибку.
    searchByIndex(index) {
        if(index >= this.size){
            throw new Error('индекс за пределами списка')
        }
        let startElem = this.head
        for(let i = 0; i <= index; i++){
            if(i !== index){
                startElem = startElem.next
            }
        }
        return startElem
    }

    // Ищет элемент в списке по значению.
    // Возвращает первый найденный элемент.
    // Опционально можно указать индекс начала поиска.
    // Если индекс за пределами — кидает ошибку.
    // Если элемент не найден, нужно вернуть null.
    searchByValue(value, startIndex = 0) {
        let startElem = this.searchByIndex(startIndex)
        for(let i = startIndex; i < this.size; i++){
            if(startElem.value === value){
                return startElem
            }
            startElem = startElem.next
        }
        return null
    }

    toArray(){
        const arr = []
        let startElem = this.head
        for(let i = 0; i < this.size; i++){
            arr.push(startElem.value)
            startElem = startElem.next
        }
        return arr
    }
}

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду
function createNode(value) {
    return {
        value,
        next: null,
        prev: null,
    };
}

const list = new DoublyLinkedList();

//add first element
list.add(5);
console.assert(list.size === 1)
console.assert(list.searchByIndex(0).value === 5)
console.assert(list.searchByIndex(0) === list.tail)
console.assert(list.searchByIndex(0) === list.head)
console.assert(list.searchByIndex(0).prev === null)
console.assert(list.searchByIndex(0).next === null)

//add second element to tail
list.add(10);
console.assert(list.size === 2)
console.assert(list.searchByIndex(0).value === 5)
console.assert(list.searchByIndex(1).value === 10)
console.assert(list.searchByIndex(0).next === list.searchByIndex(1))
console.assert(list.searchByIndex(1).prev === list.searchByIndex(0))
console.assert(list.searchByIndex(1) === list.tail)
console.assert(list.searchByIndex(0) === list.head)
console.assert(list.searchByIndex(0).prev === null)
console.assert(list.searchByIndex(1).next === null)

//add element by index
list.add(-133 ,1)
console.assert(list.size === 3)
console.assert(list.searchByIndex(0) === list.head)
console.assert(list.searchByIndex(2) === list.tail)
console.assert(list.searchByIndex(0).prev === null)
console.assert(list.searchByIndex(2).next === null)
console.assert(list.searchByIndex(0).next === list.searchByIndex(1))
console.assert(list.searchByIndex(2).prev === list.searchByIndex(1))
console.assert(list.searchByIndex(0).value === 5)
console.assert(list.searchByIndex(2).value === 10)

//search by value
console.assert(list.searchByValue(-133).value === -133)
console.assert(list.searchByValue(-133).next === list.searchByIndex(2))
console.assert(list.searchByValue(-133).prev === list.searchByIndex(0))

//search value out of range
console.assert(list.searchByValue(5,1) === null)

//remove head
list.removeByIndex(0)
console.assert(list.size === 2)
console.assert(list.searchByIndex(0) === list.head)
console.assert(list.searchByIndex(0).value === -133)
console.assert(list.searchByIndex(0).prev === null)
console.assert(list.searchByIndex(0).next === list.tail)
console.assert(list.searchByIndex(0).next.value === 10)

//remove tail
list.removeByIndex(1)
console.assert(list.size === 1)
console.assert(list.searchByIndex(0) === list.head)
console.assert(list.searchByIndex(0) === list.tail)
console.assert(list.searchByIndex(0).value === -133)
console.assert(list.searchByIndex(0).prev === null)
console.assert(list.searchByIndex(0).next === null)

//remove last element of list by value
list.removeByValue(-133)
console.assert(list.size === 0)
console.assert(list.tail === null)
console.assert(list.head === null)

//add element to empty list by index
list.add(100, 0);
console.assert(list.size === 1)
console.assert(list.searchByIndex(0).value === 100)
console.assert(list.searchByIndex(0) === list.tail)
console.assert(list.searchByIndex(0) === list.head)
console.assert(list.searchByIndex(0).prev === null)
console.assert(list.searchByIndex(0).next === null)

//fonction for testing cases when Error thrown
function errorTest(list, func, ...args){
    try{
        list.func(...args)
    }catch(e){
        console.log(e)
        return 'error'
    }
}

//search out of range
const searchOutOfRange = () => {
    try{
        list.searchByIndex(1)
    }catch(e){
        return 'searchOutOfRangeError'
    }
}
console.assert(searchOutOfRange() === 'searchOutOfRangeError')

//add element out of range
const addOutOfRange = () => {
    try{
        list.add(100, 1)
    }catch(e){
        return 'addOutOfRangeError'
    }
}
console.assert(addOutOfRange() === 'addOutOfRangeError')


//remove element out of range
const removeOutOfRange = () => {
    try{
        list.remove(1)
    }catch(e){
        return 'removeOutOfRangeError'
    }
}
console.assert(removeOutOfRange() === 'removeOutOfRangeError')
