const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('DevOps!');
});
app.listen(3000, function () {
    console.log('Servidor na porta 3000!');
});
