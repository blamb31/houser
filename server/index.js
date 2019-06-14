const express = require('express')
const app = express()
const ctrl = require('./controller')
require('dotenv').config()
const massive = require('massive')

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Listening on Port: ${SERVER_PORT}`))
    console.log('Connected to db')
})

app.get('/api/houses',ctrl.getHouses)
app.post('/api/houses', ctrl.createHouse)
app.delete('/api/houses/:id',ctrl.deleteHouse)



