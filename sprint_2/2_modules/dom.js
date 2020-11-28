
function createElement(tag = 'div', content) {
    const element = document.createElement(tag);
    element.textContent = content;
    return element;
}
