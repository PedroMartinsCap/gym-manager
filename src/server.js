const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(methodOverride('_method')) // antes da rota, pois deve sobrescrever, se ficar após a rota irá criar uma nova entrada.
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('src/app/views', {
  autoescape: false,
  express: server,
  noCache: true
})

server.listen(5000, function () {
  console.log('Server is running')
})