const router = require('express').Router()
const attendanceController = require('../Controllers/attendanceController')

router.post('/',attendanceController.store)
router.get('/',attendanceController.index)
router.get('/:id',attendanceController.show)

module.exports = router