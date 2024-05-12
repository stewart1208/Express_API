const router = require('express').Router()
const presenceController = require('../Controllers/presenceController')

router.get('/',presenceController.index)
router.get('/:id',presenceController.show)
router.post('/',presenceController.store)
router.put('/:id/addstudent',presenceController.addStudent)
router.put('/:id/removestudent',presenceController.removeStudent)

module.exports = router