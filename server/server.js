const path = require('path')
const express = require('express')
const compression = require('compression')


const server = express()


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(compression())

module.exports = server
