const express = require('express')
const router = express.Router()
const studentsRoute = require('./studentsRouts')
const teachersRoute = require('./teachersRoutes')
const adminRoute = require('./adminRoutes')
const authRoute = require('./auth/index')
const sallesRoute = require('./sallesRoutes')
const coursesRoute = require('./coursesRoutes')

router.use('/students',studentsRoute)
router.use('/teachers',teachersRoute)
router.use('/admin',adminRoute)
router.use('/auth',authRoute)
router.use('/salles',sallesRoute)
router.use('/courses',coursesRoute)

module.exports = router