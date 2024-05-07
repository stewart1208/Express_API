const mongoose = require('mongoose')
const Salle = require('./salleModel')
const Teacher = require('./teacherModel')
const Student = require('./studentModel')
const coursSchema = mongoose.Schema({
    title : {
        type : String,
        require : true
    } ,
    date : {
        type : Date
    },
    level : {
        type : String,
        require : true,
        enum : ['1p','2p','3p','4p','5p','1m','2m','3m','4m','1l','2l','3l',]
    },
    salle :{
        type: mongoose.Schema.Types.ObjectId,
        ref: Salle,
        required: true
    } ,
    teacher : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : Teacher , 
        require : true 
    } ,
    students :[{
        type : mongoose.Schema.Types.ObjectId , 
        ref : Student
    }],
}) 
const Cours = mongoose.model("Cours",coursSchema)
module.exports=Cours