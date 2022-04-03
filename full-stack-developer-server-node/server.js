const express = require('express');
const app = express();
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.listen(4000);