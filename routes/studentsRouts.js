const express = require('express')
const router = express.Router()
const studentsController = require('../Controllers/studentsController')

//index
router.get('/',studentsController.index)
//create
router.get('/create',studentsController.create)
//show
router.get('/:id',studentsController.show)
//store
router.post('/',studentsController.store)
//edit
router.get('/:id/edit',studentsController.edit)
//update
router.put('/:id',studentsController.update)
//destroy
router.delete('/:id',studentsController.destroy)
 module.exports =router