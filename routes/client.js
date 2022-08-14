var express = require('express');
var router = express.Router();
var SQL = require('../database/connection.js');
var paramsParser = require ('../helpers/paramsParser.js')

const MariaDB = new SQL;


router.get('/create', function(req, res, next) {
    res.render ('client/create')
});

router.post('/create', function(req, res, next) {
    const params = paramsParser.getParams(req, 'POST');
    MariaDB.insert('Clientes', params);

    req.flash('success', `client created successfully`);
    res.redirect ('/client/read')
});


router.get('/read', function(req, res, next) {
    MariaDB.select('clientes', '', (err, result)=>{
        res.render('client/read', { data:result })
    });
});


router.get('/update', function(req, res, next) {
    MariaDB.select('clientes', '', (err, result)=>{
        res.render('client/update/update-list', { data:result })
    });
});

router.get('/update/:id', function(req, res, next) {
    const id = req.params.id;

    MariaDB.select('clientes',  `WHERE idClientes = ${id} LIMIT 1`, (err, result)=>{
        res.render('client/update/update-id', {data: result[0]})
    });
});

router.post('/update/:id', function(req, res, next) {
    const id = req.params.id;

    const params = paramsParser.getParams(req, 'POST');
    MariaDB.update('Clientes', params, `WHERE idClientes = ${id}`);
    req.flash('success', `client ${id} updated successfully`); res.redirect ('/client/read');
});



router.get('/delete', function(req, res, next) {
    MariaDB.select('clientes', '', (err, result)=>{
        res.render('client/delete/delete-list', { data:result })
    });
});

router.get('/delete/:id', function(req, res, next) {
    const id = req.params.id;
    MariaDB.delete('Clientes', `WHERE idClientes = ${id}`);
    req.flash('success', `client ${id} deleted successfully`); res.redirect ('/client/read');
});

module.exports = router;