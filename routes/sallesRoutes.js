const express = require('express')
const salleController = require('../Controllers/salleController')
const router = express.Router()

router.get('/',salleController.index)
router.get('/:id',salleController.show)
router.get('/:id/groups',salleController.getGroups)
router.post('/',salleController.store)
router.put('/:id',salleController.update)
router.delete('/:id',salleController.destroy)

module.exports=router