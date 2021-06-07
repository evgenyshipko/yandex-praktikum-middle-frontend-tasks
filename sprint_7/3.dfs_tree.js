function DFS(node, value) {
    const queue = [node]
    while(queue.length > 0){
        const node = queue.pop()
        if(node.value === value){
            return node
        }
        if(node.children){
            queue.push(...node.children.reverse())
        }
    }
    return undefined
}
