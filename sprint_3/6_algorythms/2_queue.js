class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        const node = { value, next: null, prev: null };
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
        return this.size
    }

    dequeue() {
        if(this.isEmpty()){
            throw Error('queue is empty')
        }
        const nodeToRemove = this.head
        const nextNode = nodeToRemove.next

        if (nextNode) {
            nodeToRemove.next = null
            nextNode.prev = null
        }

        this.head = nextNode

        if (this.tail === nodeToRemove) {
            this.tail = nextNode
        }
        this.size--
        return nodeToRemove
    }

    peek() {
        return this.head
    }

    isEmpty() {
        return this.size === 0
    }
}

const queue = new Queue()

