const router = require('express').Router()
const presenceController = require('../Controllers/presenceController')

router.get('/',presenceController.index)
router.get('/:id',presenceController.show)
router.post('/',presenceController.store)

module.exports = router