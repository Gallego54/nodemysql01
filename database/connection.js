/**
 * Setting database configuration
 */
 var mysql = require('mysql');
 var colors = require ('colors');
 const database = 'Empresa';
 
 const connection = mysql.createConnection ({
   host: 'localhost',
   user: 'root',
   password: '',
   database: database
 })

 connection.connect (error => {
    if (error) {
        console.error (colors.red(`[${database}] connection failed`)) 
    } else {
        console.log   (colors.green(`[${database}] connetion success`));
    }
 }) 

 const MYSQL = function(){
    
    // Create
    this.insert = (table, value) => {
        const data = Object.values(value);
        const keys = Object.keys(value).join();


        let querySQL = `INSERT INTO  ${table} (${keys}) VALUES (`;
        data.forEach(x => { querySQL+=`?,` });
        querySQL = querySQL.slice(0, -1);
        querySQL += ')';

        connection.query(
          querySQL, 
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
        
        let querySQL = `UPDATE ${table} SET `;
        keys.forEach(ele => {
          querySQL+=`${ele} = ?,`
        });

        querySQL = querySQL.slice(0, -1);
        querySQL += ` ${condition}`;
        connection.query(querySQL, data);
    }


    // Delete
    this.delete = (table, condition) => {
      connection.query(
        `DELETE FROM ${table} ${condition}`
      );
    }




    //----------------------------------------
    let queryPrepared = "";
    this.setQuery = ( query ) => {
      queryPrepared = query;
    }

    this.executeQuery = ( callback ) => {
      return connection.query( queryPrepared, (err, result) => {
        callback (err, result);
      });
    }

    this.clearQuery = ( query ) => {
      queryPrepared = "";
    }
 }

 module.exports = MYSQL;