const mongoose = require('mongoose')
const Group = require('./groupModel')

const coursSchema = mongoose.Schema({
    title : {
        type : String,
        require : true
    } ,
    level : {
        type : String,
        require : true,
        enum : ['1p','2p','3p','4p','5p','1m','2m','3m','4m','1l','2l','3l',]
    },
    prix : {
        type : Number,
        require : true ,
    } ,
    groups : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : Group
    }],
}) 
const Cours = mongoose.model("Cours",coursSchema)
module.exports=Cours