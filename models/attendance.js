const mongoose = require('mongoose')
const Student = require('./studentModel')
const Group = require('./groupModel')

const attendanceSchema = mongoose.Schema({
    date : {
        type : Date ,
        require : true,
        default : Date.now
    },
    student : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : Student
    } ,
    group : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : Group
    }   
})

const Attendance = mongoose.model('Attendance',attendanceSchema)

module.exports=Attendance