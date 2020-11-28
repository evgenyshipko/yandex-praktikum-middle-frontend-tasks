const obj = { x: 15 };

function first1() {
    return this.x; // 15
}

let first = first1.bind(obj)

function second() {

    return first(); // Вернет undefined, а нужно 15
}

console.log('hi')
