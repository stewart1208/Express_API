const mongoose = require('mongoose')
const teacherSchema = mongoose.Schema({
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
const Teacher = mongoose.model('Teacher',teacherSchema)
module.exports = Teacher