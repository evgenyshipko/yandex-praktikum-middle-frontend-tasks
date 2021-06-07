class Stack {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
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

    pop() {
        if(this.isEmpty()){
            throw Error('stack is empty')
        }
        const nodeToRemove = this.tail;
        const prevNode = nodeToRemove.prev;

        if (prevNode) {
            nodeToRemove.prev = null;
            prevNode.next = null;
        }

        this.tail = prevNode;

        if (this.head === nodeToRemove) {
            this.head = prevNode;
        }
        this.size--
        return nodeToRemove;
    }

    peek() {
        return this.tail
    }

    isEmpty() {
        return this.size === 0
    }
}
