const express = require('express')
const router = express.Router()
const coursesController = require('../Controllers/coursesController')

router.get('/',coursesController.index)
router.get('/:id',coursesController.show)
router.get('/:id/teacher',coursesController.getTeacher)
router.put('/:id',coursesController.update)
router.post('/',coursesController.store)
router.delete('/:id',coursesController.destroy)

module.exports=router