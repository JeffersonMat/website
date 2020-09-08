const path = require('path')
const express = require('express')
const compression = require("compression")


const server = express()

server.use(compression())
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


module.exports = server
