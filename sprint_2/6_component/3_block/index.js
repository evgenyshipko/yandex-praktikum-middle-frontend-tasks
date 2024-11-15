import Block from "./block.js";

class Button extends Block {
    constructor(props) {
        // Создаём враппер дом-элемент button
        super("button", props);
    }

    render() {
        console.log('this.props', this.props)
        // В проекте должен быть ваш собственный шаблонизатор
        return `<div>${this.props.text}</div>`;
    }
}

function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    return root;
}

const button = new Button({
    text: 'Click me',
});

// app — это id дива в корне DOM
render(".app", button);

console.log('==================')
// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
    button.setProps({
        text: 'Click me, please',
    });
}, 1000);
