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


 const MYSQL = function(){
    // Create
    this.insert = (table, value) => {
        const data = Object.values(value);
        const keys = Object.keys(value).join();

        connection.query(
          `INSERT INTO  ${table} (${keys}) VALUES ?`, 
          data);  
    }


    // Read
    this.select = (table, condition='', callback) => {
      connection.query(`SELECT * FROM ${table} ${condition}`,
      (err, result)=>{
        callback(err, result);
      });
    }
    


    // Update
    this.update = (table, value, condition='') => {
        const data = Object.values(value);
        const keys = Object.keys(value);
        
        let querySQL = `UPDATE ${table} SET `
        keys.forEach(ele => {
          querySQL+=`${ele} = ?,`
        });

        querySQL = querySQL.slice(0, -1);
        querySQL += ` ${condition}`;
        console.log(querySQL)
        connection.query(querySQL, data);
    }


    // Delete
    this.update = (table, condition) => {
      connection.query(
        `DELETE FROM ${table} ${condition}`
      );
    }
 }

 module.exports = MYSQL;