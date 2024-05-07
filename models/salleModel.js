const mongoose = require('mongoose')
const salleSchema = mongoose.Schema({
    num : {
        type : Number,
        min : 1,
        max : 50,
        require : true,
        unique : true,
    },
    capacite :{
        type :Number,
        min : 5,
        max : 30,
        require : true,
    }
})
const Salle = mongoose.model('Salle',salleSchema)
module.exports = Salle