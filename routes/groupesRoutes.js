const express = require('express')
const router = express.Router()
const groupesController = require('../Controllers/groupesContrller')

router.get('/',groupesController.index)
router.get('/:id',groupesController.show)
router.get('/:id/cours',groupesController.getCours)
router.get('/:id/presences',groupesController.getPresences)
router.post('/',groupesController.store)
router.put('/:id',groupesController.update)
router.delete('/:id',groupesController.destroy)


module.exports=router