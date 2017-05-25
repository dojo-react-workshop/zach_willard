'use strict';

const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');
const port = 8000;

app.use(bp.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, './client')));
app.set('views', path.join(__dirname, './client/templates'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    const contextObj = {
        title: 'Survey Form'
    }
    res.render('index', contextObj);
})

app.post('/submit', function (req, res) {
    const infoFromForm = req.body;



    res.render('submittedinfo', req.body);
})

app.listen(port, function () {
    console.log(`Server started on port: ${port}`);
})