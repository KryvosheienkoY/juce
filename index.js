const express = require('express');
const app = express();

app.use('/assets', express.static(__dirname + '/assets'));

app.listen(5555);

console.log((__dirname+'/index.html'));

app.get('/', (req, res) => {
    res.sendFile((__dirname+'/index.html'));
});
