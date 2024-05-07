const express = require('express')
const router = express.Router()
const coursesController = require('../Controllers/coursesController')

router.get('/',coursesController.index)
router.get('/:id',coursesController.show)
router.put('/:id',coursesController.update)
router.post('/',coursesController.store)
router.delete('/:d',coursesController.destroy)

module.exports=router