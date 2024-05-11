const Presence = require('../models/presenceModel')
const Prsence = require('../models/presenceModel')


const index = async (req,res)=>{
    try{
        const presences = await Prsence.find()
        res.status(200).json(presences)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const show = async (req,res)=>{
    try{
        const presence = await Prsence.findById(req.params.id)
        if(!presence) return res.status(404).json({message : "presence not fund !"})
        res.status(200).json(presence)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const store = async (req,res)=>{
    try{
        const newPresence = new Presence(req.body)
        const presenceSaved = await newPresence.save()
        res.status(201).json(presenceSaved)
    }catch(err){res.status(500).json({message : err.message})}
}
const addStudent = async (req,res) => {
    try{
        const presence = await Prsence.findById(req.params.id)
        if(!presence) return res.status(400).json({message : "presence not existe ! "})
        Presence.students.push(req.body.student)
        const updatedPresence = await presence.save();
        res.status(200).json(updatedPresence);
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
//const removeStudent

module.exports={
    index,show,addStudent,store
}