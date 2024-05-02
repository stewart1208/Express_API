const express = require('express')
const router = express.Router()
const adminController = require('../Controllers/adminController')

router.get('/',adminController.index)
router.get('/:id',adminController.show)
router.post('/',adminController.store)
router.put('/:id',adminController.update)
router.delete('/:id',adminController.destroy)

module.exports=router