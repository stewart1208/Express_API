const express = require('express')
const router = express.Router()
const teachersController = require('../Controllers/teachersController')

router.get('/',teachersController.index)
router.get('/create',teachersController.create)
router.get('/:id',teachersController.show)
router.get('/:id/edit',teachersController.edit)
router.post('/',teachersController.store)
router.put('/:id',teachersController.update)
router.delete('/:id',teachersController.destroy)

module.exports = router