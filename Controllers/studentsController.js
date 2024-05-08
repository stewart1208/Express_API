const Student = require('../models/studentModel')
const bcrypt = require('bcrypt');


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
const store = async (req,res)=>{
    try{
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newStudent = new Student({ ...req.body, password: hashedPassword });
        const StudentSaved = await newStudent.save()
        res.status(201).json(StudentSaved)
    }catch(err){res.status(400).json({message : err.message})}
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
const getByLevel = async (req, res) => {
    try {
        const students = await Student.find({ level: req.params.level });
        if (students.length === 0) {
            return res.status(404).json({ message: "We don't have students in this level" });
        }
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    index,show,store,update,destroy,getByLevel
}