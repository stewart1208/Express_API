const Cours = require('../models/CoursModel')
const Teacher = require('../models/teacherModel')

const index = async (req,res)=>{
    try{
        const courses = await Cours.find().populate('groups')
        res.status(200).json(courses)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const show = async (req,res)=>{
    try{
        const cours = await Cours.findById(req.params.id).populate('groups')
        if(!cours)return res.status(404).json({message : "cours not fund ! "})
        res.status(200).json(cours)
    }catch(err){res.status(500).json({message : err.message})}
}
const store = async (req,res)=>{
    try{
        const newCours = new Cours(req.body)
        coursSaved = await newCours.save()
        res.status(201).json(coursSaved)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}
const update = async (req,res)=>{
    try{
        const coursUpdated = await Cours.findByIdAndUpdate(req.params.id,req.body)
        if(!coursUpdated)return res.status(400).json({message : "cours not fund ! "})
        res.status(200).json(coursUpdated)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const destroy = async (req,res)=>{
    try{
        const coursdeleted = await Cours.findByIdAndDelete(req.params.id)
        if(!coursdeleted){
            return res.status(404).json({message : "cours not exist !"})
        }
        res.status(200).json({message : "rah lghali raaaaah ! "})
    }catch(err){res.status(500).json({message : err})}
}
const getTeacher = async (req,res)=>{
    try{
        const teacher = await Teacher.find({courses : req.params.id})
        res.status(200).json(teacher)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

module.exports={
    index,show,store,update,destroy,getTeacher
}