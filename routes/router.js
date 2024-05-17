const express = require('express')
const router = express.Router()
const studentsRoute = require('./studentsRouts')
const teachersRoute = require('./teachersRoutes')
const adminRoute = require('./adminRoutes')
const authRoute = require('./auth/index')
const sallesRoute = require('./sallesRoutes')
const coursesRoute = require('./coursesRoutes')
const groupsRoute = require('./groupesRoutes')
const attendanceRoute = require('./attendaceRoutes')
const amountRoute = require('./amountsRoutes')

router.use('/students',studentsRoute)
router.use('/teachers',teachersRoute)
router.use('/admin',adminRoute)
router.use('/auth',authRoute)
router.use('/salles',sallesRoute)
router.use('/courses',coursesRoute)
router.use('/groups',groupsRoute)
router.use('/attendances',attendanceRoute)
router.use('/amounts',amountRoute)

module.exports = router