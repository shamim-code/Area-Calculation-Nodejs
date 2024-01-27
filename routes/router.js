'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

router.get('/ragtangle',(req,res)=> {

    //const filePath = path.join(__dirname, '../', 'files', 'Ractangle.html');
    const filePath = path.join(__dirname, '../files/Ractangle.html');
    res.sendFile(filePath);
})

router.post('/ragtangle', (req, res)=> {
    const height = req.body.height;
    const width = req.body.width;
    
    res.send(`<h2> Area is : ${height*width}</h2>`);
});



router.get('/circle', (req, res)=> {
    const filepath = path.join(__dirname, '../files/Circle.html');
    res.sendFile(filepath);
});

router.post('/circle', (req, res)=> {
    const r = req.body.redius;
    const area = 3.1415*(r*r);

    res.send(`Area of the circle is ${area.toFixed(2)}`);
});


module.exports = router;