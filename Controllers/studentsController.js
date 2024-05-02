const Student = require('../models/studentModel')

const index = async (req,res)=>{
    try{
        const students = await Student.find()
        res.status(200).json(students)
    }catch(err){
        res.status(500).json({message : err})
    }
}
const show = async (req,res)=>{
    try{
        const student = await Student.findById(req.params.id)
        if(!student){
            return res.status(404).json({message : "student not fund !"})
        }
        res.status(200).json(student)
    }catch(err){res.status(500).json({message : err})}
}
const create = (req,res)=>{
    res.send('student create page !')
}
const store = async (req,res)=>{
    try{
        const newStudent = new Student(req.body)
        const StudentSaved = await newStudent.save()
        res.status(201).json(StudentSaved)
    }catch(err){res.status(400).json({message : err})}
}
const edit =(req,res)=>{
    res.send('student edity page')
}
const update = async (req,res)=>{
    try{
        const StudentUpdeted = await Student.findByIdAndUpdate(req.params.id,req.body,{new : true})
        if(!StudentUpdeted){
            return res.status(404).json({message : "student not fund ! "})
        }
        res.status(200).json(StudentUpdeted)
    }catch(err){res.status(400).json({message : err})}
}
const destroy = async (req,res)=>{
    try{
        const Studentdeleted = await Student.findByIdAndDelete(req.params.id)
        if(!Studentdeleted){
            return res.status(404).json({message : "wiin tji winn !"})
        }
        res.status(200).json({message : "rah lghali raaaaah ! "})
    }catch(err){res.status(500).json({message : err})}
}
module.exports = {
    index,show,create,store,edit,update,destroy
}