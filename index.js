const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const mysql = require('mysql')
const dbconfig = require('./config/database.js')

// configuration
const connection = mysql.createConnection(dbconfig)
const app = express()
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Root')
})

app.get('/users', (req, res) => {
  connection.query('SELECT * from users', (error, rows) => {
    if (error) throw error;
    console.log('Users info is: ', rows)
    res.send(rows)
  })
})

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`)
})