const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    lastname : {
        type : String,
        require : true
    },
    birthday : { 
        type : Date ,
        require : true
    },
    level : {
        type : String,
        require : true,
        enum : ['1p','2p','3p','4p','5p','1m','2m','3m','4m','1l','2l','3l',]
    },
    phonenumber : {
        type : Number ,
        require : false ,
        unique : true
    },
    adresse : {
        type : String,
        require : true
    },
    email : {
        type : String ,
        require : true ,
        unique : true
    },
    password : {
        type : String,
        require : true
    },
    createdat : {
        type : Date,
        default : Date.now
    }

})
const Student = mongoose.model('Student',studentSchema)
module.exports = Student