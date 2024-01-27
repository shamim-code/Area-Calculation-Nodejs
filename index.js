'use strict';
const express = require('express');
const app= require('./app');

app.listen(5050, ()=> {
    console.log('listening on');
})