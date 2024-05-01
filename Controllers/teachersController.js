const Teacher = require('../models/teacherModel')

const index = async(req,res)=>{
    try{
        const teachers = await Teacher.find()
        res.status(200).json(teachers)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const show = async (req,res)=>{
    try{
        const teacher = await Teacher.findById(req.params.id)
        if(!teacher) {
            return res.status(404).json({message : 'teacher not fund !'})
        }
        else return res.status(200).json(teacher)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const create = (req,res)=>{
    res.send('teacher create page !')
}
const store = async (req,res)=>{
    try{
        const newTeacher = new Teacher(req.body)
        const teacherSaved = await newTeacher.save()
        res.status(201).json(teacherSaved)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}
const edit =(req,res)=>{
    res.send('teacher edity page')
}
const update = async (req,res)=>{
    try{
        const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updatedTeacher){
            return res.status(404).json({message:'teacher not fund !'})
        } 
        res.status(200).json(updatedTeacher)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}
const destroy = async (req,res)=>{
    try{
        const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id)
        if(!deletedTeacher){
            return res.status(404).json({message:'teacher not fund !'})
        }
        res.status(200).json(deletedTeacher)
    }catch(err)
    {res.status(500).json({message:err.message})}
}
module.exports = {
    index,show,create,store,edit,update,destroy
}