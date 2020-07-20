const express = require('express')
const instructors = require('./instructors')
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.redirect('instructors')
})

routes.get('/instructors', (req, res) => {
  return res.render('instructors/index')
})

routes.get('/create', (req, res) => {
  return res.render('instructors/create')
})

routes.post('/instructors', instructors.post)

routes.get('/instructors/create', function (req, res) {
  return res.render('instructors/create')
})

routes.get('/instructors/:id/edit', function (req, res) {
  return res.render('instructors/edit')
})

routes.get('/instructors/:id', instructors.show)

routes.get('/members', (req, res) => {
  return res.send('members')
})

module.exports = routes
