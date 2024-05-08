const mongoose = require('mongoose')
const Student = require('./studentModel')
const Salle = require('./salleModel')
const Cour = require('./CoursModel')

const groupSchema = mongoose.Schema({
    name : {
        type : String , 
        require : true ,
    } , 
    day : {
        type :String ,
        require : true
    } , 
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true,
        validate: {
            validator: function (endTime) {return endTime > this.startTime; },
            message: "La date de fin doit être postérieure à la date de début" 
        }
    },
    students : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : Student
    }],
    salle :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: Salle,
        required: true
    }] ,
    cour : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : Cour
    }
})
const Group = mongoose.model("Group",groupSchema)
module.exports = Group