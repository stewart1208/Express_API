const mongoose = require('mongoose')
const Presence = require('./presenceModel')
const Cours = require('./CoursModel')
const Student = require('./studentModel')

const amountSchema = mongoose.Schema({
    totale : {
        type : Number ,
        require : true , 
        default : 0
    } ,
    student : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : Student ,
        require : true
    } ,
    presences : [{
        type : mongoose.Schema.Types.ObjectId , 
        ref : Presence,
        require : true
    }]

})
const Amount = mongoose.model('Amount',amountSchema)
module.exports=Amount