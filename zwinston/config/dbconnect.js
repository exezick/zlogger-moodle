const express = require('express')
const mysql = require('mysql')

//create connection to db
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'hub'
})

// connect
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('Mysql Connected...')
})