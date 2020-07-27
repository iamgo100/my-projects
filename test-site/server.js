const express = require('express');
const app = express();
const fs = require('fs');
// const jsonParser = express.json();

app.use(express.static(__dirname + '/site'));

app.get('/', (req, res) => {
    res.sendFile('/index.html')
});

app.post('/db', (req, res) => {
    const fileContent = fs.readFileSync(__dirname + '/site/db.txt', 'utf8');
    res.send(fileContent);
});

app.listen(8080, () => {
    console.log('Server started')
});