const mongoose = require('mongoose')
const Student = require('./studentModel')
const Salle = require('./salleModel')

const groupSchema = mongoose.Schema({
    name : {
        type : String , 
        require : true ,
        unique : true ,
    } , 
    day : {
        type :String ,
        require : true
    } , 
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true,
    },
    students : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : Student
    }],
    salle :{
        type: mongoose.Schema.Types.ObjectId,
        ref: Salle,
        required: true
    } ,
})
const Group = mongoose.model("Group",groupSchema)
module.exports = Group