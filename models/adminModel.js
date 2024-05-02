const mongoose = require('mongoose')
const adminSchema = mongoose.Schema({
    name : {
        type : String ,
        require : true ,
    } ,
    email : {
        type : String , 
        require : true ,
        unique : true,
    } , 
    password : {
        type : String ,
        require : true ,
    },
    createdat : {
        type : Date,
        default : Date.now
    }
})
const Admin = mongoose.model('Admin',adminSchema)
module.exports=Admin