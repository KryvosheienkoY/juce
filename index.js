const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/assets'));

app.listen(5555);


app.get('/', (req, res) => {
    res.render('main_unlogged_view');
});
