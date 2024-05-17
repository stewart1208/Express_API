const mongoose = require('mongoose')
const Teacher = require('./teacherModel')

const salarySchema = mongoose.Schema({
    teacher : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : Teacher ,
        require : true ,
    },
    salary : {
        type : Number ,
        require : true ,
    },
    salaryPayed : {
        type : Number ,
        default : 0
    },
    debt : {
        type : Number , 
        default : 0 ,
    }
})
const Salary = mongoose.model('Salary',salarySchema)

module.exports = Salary