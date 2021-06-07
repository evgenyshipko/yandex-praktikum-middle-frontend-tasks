/*
   Алгоритм обхода бинарного дерева в ширину
*/


function BFS(root, value) {
    const queue = [root]
    while(queue.length > 0){
        const node = queue.shift()
        if(node.value === value){
            return node
        }
        if(node.children){
            queue.push(...node.children)
        }
    }
    return undefined
}
