const express = require('express')
const route = express.Router()
const authController = require('./controller')

route.get('/register',authController.register)
route.get('/login',authController.login)

module.exports = route