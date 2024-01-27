'use strict';

const express = require('express');
const router = require('./routes/router');
const path = require('path');

const app = express();
app.use(router);


router.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/files/home.html'))
})


module.exports = app;

