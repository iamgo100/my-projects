const express = require('express');
const app = express();
// const jsonParser = express.json();

app.use(express.static(__dirname + '/site'));

app.get('/', (req, res) => {
    res.sendFile('/index.html')
});

app.listen(8080, () => {
    console.log('Server started')
});