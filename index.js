const express = require('express');
const app = express();

app.use('/assets', express.static(__dirname + '/assets'));

app.listen(5555);


app.get('/', (req, res) => {
    res.sendFile((__dirname+'/index.html'));
});
