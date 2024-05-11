const router = require('express').Router()
const presenceController = require('../Controllers/presenceController')

router.get('/',presenceController.index)
router.get('/:id',presenceController.show)
router.post('/',presenceController.store)
router.put('/:id/addSudent',presenceController.addStudent)

module.exports = router