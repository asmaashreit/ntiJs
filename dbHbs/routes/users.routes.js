const express = require('express')
const router = new express.Router()
const usersController = require('../controller/users.controller')

//router.get('/showUsers', usersController.showUsers)
router.get('/showoperations', usersController.showOperations)

router.get('/addUser', usersController.addUserViews)
router.post('/addUser', usersController.addNewUser)

router.get('/login', usersController.loginViews)

router.get('/addOperation', usersController.addOperationViews)
router.post('/addOperation', usersController.addNewOperation)

router.get('/showSingleOp/:id', usersController.showSingle)

router.get('/deleteOperation/:id', usersController.deleteoperation)

module.exports = router