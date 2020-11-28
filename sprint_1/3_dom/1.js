'use strict';

/**
 * Генерация HTML списка чатов
 * @param {Chat[]} chats
 * @return {HTMLUListElement}
 */
function makeChatsList(chats) {
    let htmlChats = ''
    chats.forEach((chat) => {
        htmlChats += `<li>${chat.title} ${chat.lastMessage}</li>`
    })
    const ul = document.createElement('ul')
    ul.innerHTML = htmlChats
    return ul
}
