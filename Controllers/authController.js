const Student = require('../models/studentModel')

const login = (req,res)=>{
    const {email,password}= req.body
    const student = Student.findOne({email : email})
    if(password === student.password) return res.json({Message : "wlh la howa !"})
    res.json({Message : "machi howa !"})
}
const register = (req,res)=>{
 res.send('register')
}

module.exports={
    login,register
}