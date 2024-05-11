const mongoose = require('mongoose')
const Student = require('../models/studentModel')
const Group = require ('../models/groupModel')

const presenceSchema = mongoose.Schema({
    date : {
        type : Date ,
        require : true,
        default : Date.now
    },
    students : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : Student ,
        require : true
    }] ,
    group : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : Group ,
        require : true
    }
})
const Presence = mongoose.model('Presence',presenceSchema)
module.exports = Presence