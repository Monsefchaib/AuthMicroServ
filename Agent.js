const {app } = require('./index')
var express = require('express');
var router = express.Router();


router.get('/test',(req,res)=>{
    res.send('test bien done');
})