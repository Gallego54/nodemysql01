/**
 * Setting database configuration
 */
 var mysql = require('mysql');
 const database = 'Empresa';
 
 const connection = mysql.createConnection ({
   host: 'localhost',
   user: 'root',
   password: '',
   database: database
 })

 connection.connect (error => {
    if (error) {
        console.error ('connection failed') 
    } else {
        console.log('connetion success');
    }
 }) 

 module.exports = connection;