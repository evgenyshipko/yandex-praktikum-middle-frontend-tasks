// Express уже установлен, можно пользоваться
const express = require('express');
const PORT = 3000;

console.log('privet')
console.log(__dirname)

const app = express();
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Мой текст в логе после запуска ${PORT}!`);
});
