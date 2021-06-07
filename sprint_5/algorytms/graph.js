class Graph {
    constructor() {
        this.data = {};
    }

    // Добавляет вершину.
    // Если вершина уже существует, ничего не делает.
    addVertex(vertex) {
        if(!this.data[vertex]){
            this.data[vertex] = []
        }
    }

    // Удаляет вершину.
    removeVertex(vertex) {
        const adjacentList = this.data[vertex]
        adjacentList.forEach((adjaceVertex) => {
            this.data[adjaceVertex] = this.data[adjaceVertex].filter(it => it !== vertex)
        })
        delete this.data[vertex]
    }

    // Добавляет грань между двумя вершинами.
    addEdge(vertex1, vertex2) {
        if(!this.isVertexValid(vertex1, vertex2)){
            return
        }
        if(!this.data[vertex1].includes(vertex2)){
            this.data[vertex1].push(vertex2)
        }
        if(!this.data[vertex2].includes(vertex1)){
            this.data[vertex2].push(vertex1)
        }
    }

    // Удаляет грань между двумя вершинами.
    removeEdge(vertex1, vertex2) {
        if(!this.isVertexValid(vertex1, vertex2)){
            return
        }
        this.data[vertex1] = this.data[vertex1].filter(it => it !== vertex2)
        this.data[vertex2] = this.data[vertex2].filter(it => it !== vertex1)
    }

    isVertexValid(vertex1, vertex2){
        if(!vertex1 || !vertex2 || !this.data[vertex1] || !this.data[vertex2] || vertex1 === vertex2){
            return false
        }
        return true
    }


}

// Пример использованиия
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');

console.log(graph.data);



/*
{
A: ['B', 'C'],
B: ['A'],
C: ['A'],
D: []
}
*/
