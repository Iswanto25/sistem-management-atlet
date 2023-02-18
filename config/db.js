const express= require('express')
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    dateStrings:true,
    database: 'atlet'
  });
  
  //connect to database
  connection.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected to atlet');
});



module.exports = connection; 