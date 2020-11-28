const btn = document.querySelector('.button');

const result = [];
const first = () => {
    result.push('first event');
}
const second = () => {
    result.push('second event');
};

btn.addEventListener('click', first)
btn.addEventListener('click', second)

btn.click();
console.log(result)
// Как сейчас: result -> ["second event"]
// Как должно быть: result -> ["first event", "second event"]
