const express = require('express')
const router = express.Router()
const studentsRoute = require('./studentsRouts')
const teachersRoute = require('./teachersRoutes')
const authRoute = require('./auth/index')

router.use('/students',studentsRoute)
router.use('/teachers',teachersRoute)
router.use('/auth',authRoute)

module.exports = router