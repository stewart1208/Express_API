const express = require('express')
const router = express.Router()
const studentsController = require('../Controllers/studentsController')

router.get('/',studentsController.index)
router.get('/levels/:level',studentsController.getByLevel)
router.get('/:id',studentsController.show)
router.get('/:id/groups',studentsController.getGroup)
router.post('/',studentsController.store)
router.put('/:id',studentsController.update)
router.delete('/:id',studentsController.destroy)
 module.exports =router