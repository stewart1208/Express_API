const express = require('express')
const router = express.Router()
const studentsRoute = require('./studentsRouts')
const teachersRoute = require('./teachersRoutes')
const adminRoute = require('./adminRoutes')
const authRoute = require('./auth/index')

router.use('/students',studentsRoute)
router.use('/teachers',teachersRoute)
router.use('/admin',adminRoute)
router.use('/auth',authRoute)

module.exports = router