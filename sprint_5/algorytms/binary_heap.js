
class BinaryHeap {
    constructor() {
        this.data = []
    }

    insert(node){
        this.data.push(node)
        let nodeIndex = this.data.length - 1
        this.bubbleUp(nodeIndex)
    }

    bubbleUp(nodeIndex){
        let parentIndex = this.getParentIndex(nodeIndex)
        if(this.data[nodeIndex] > this.data[parentIndex]) {
            this.swap(this.data, nodeIndex, parentIndex)
            this.bubbleUp(parentIndex)
        }
    }

    extract() {
        const initialIndex = 0
        if(this.data.length === 1){
            this.data.pop()
        }else if(this.data.length > 1){
            this.swap(this.data, initialIndex, this.data.length - 1)
            this.data.pop()
            this.sinkDown(initialIndex)
        }
        return this.getRoot()
    }

    sinkDown(nodeIndex){
        const leftIndex = this.getLeftChildIndex(nodeIndex)
        const rightIndex = this.getRightChildIndex(nodeIndex)

        const parent = this.data[nodeIndex]
        const leftChild = this.data[leftIndex]
        const rightChild = this.data[rightIndex]
        let index = undefined
        if(leftChild && rightChild && leftChild > parent && rightChild > parent){
            index = leftChild > rightChild ? leftIndex : rightIndex
        }else if(leftChild && leftChild > parent){
            index = leftIndex
        }else if(rightChild && rightChild > parent){
            index = rightIndex
        }
        if(index){
            this.swap(this.data, nodeIndex, index)
            this.sinkDown(index)
        }
    }

    swap(array, a, b) {
        var temp = array[a]
        array[a] = array[b]
        array[b] = temp
    }

    getLeftChildIndex(index){
        return 2*index+1
    }

    getRightChildIndex(index){
        return 2*index+2
    }

    getParentIndex(index){
        return Math.floor((index - 1)/2)
    }

    getRoot(){
        return this.data[0]
    }
}


const heap = new BinaryHeap()
heap.insert(22)
heap.insert(15)
heap.insert(16)
heap.insert(17)
heap.insert(25)



console.log(heap.data)

console.log(heap.extract())
console.log(heap.extract())
