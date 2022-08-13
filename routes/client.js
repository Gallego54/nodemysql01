var express = require('express');
var router = express.Router();
var SQL = require('../database/connection.js');

const MariaDB = new SQL;


router.get('/create', function(req, res, next) {

});

router.get('/read', function(req, res, next) {
    MariaDB.select('clientes', '', (err, result)=>{
        console.log(err||result)
    });
    
});

router.get('/update', function(req, res, next) {
    
});

router.get('/delete', function(req, res, next) {

});

module.exports = router;