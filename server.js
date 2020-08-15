const express = require('express')

const items = require('./data/dbConfig')

const server = express()

server.use(express.json())

server.post('/api/items', (req, res) => {
    items('items').insert(req.body)
        .then(() => {
            res.status(201).json({ message: "item created" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "could not retrieve from database" })
        })
})

server.get('/api/items', (req, res) => {
    items('items')
        .then(items => {
            res.status(200).json(items)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "could not retrieve from database" })
        })
})

server.delete('/api/items/:id', (req, res) => {
    
})

module.exports = server