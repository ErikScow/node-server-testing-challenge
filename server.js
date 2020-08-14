const express = require('express')

const server = express()

server.use(express.json())

server.post('/api/items', (req, res) => {

})

server.get('/api/items', (req, res) => {
    
})

server.delete('/api/items/:id', (req, res) => {
    
})

module.exports = server