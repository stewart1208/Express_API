const mongoose = require('mongoose')
const Student = require('./studentModel');


const amountSchema = mongoose.Schema({
    totale : {
        type : Number ,
        require : true ,
    } ,
    amountPayed : {
        type : Number ,
        default : 0
    },
    debt : {
        type : Number , 
        default : 0 ,
    },
    student : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : Student ,
        require : true ,
        unique : true
    } 

})

const Amount = mongoose.model('Amount',amountSchema)
module.exports=Amount