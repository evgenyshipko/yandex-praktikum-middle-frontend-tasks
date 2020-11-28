const express = require('express');

const app = express();
const PORT = 3000;

const API_PREFIX = '/api/v1';

app.get(`${API_PREFIX}/text`, (req, res) => {
    res.status(200).send("Hello, World!");
});

const postData = {"data": {"items": [1, 2, 3]}}

app.put(`${API_PREFIX}/json`, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(201).send(JSON.stringify(postData));
});

app.listen(PORT, () => {
    console.log(`Мой текст и порт: ${PORT}!`);
});
