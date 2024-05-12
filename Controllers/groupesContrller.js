const Group = require('../models/groupModel')
const Cours = require ('../models/CoursModel')
const Presence = require('../models/presenceModel')

const index = async (req,res)=>{
    try{
        const groups = await Group.find().populate('students salle')
        res.status(200).json(groups)
    }catch(err){res.status(500).json({message : err.message})}
}
const show = async (req,res)=>{
    try{
        const group = await Group.findById(req.params.id).populate('students salle')
        if(!group) return res.status(404).json({message : "group not fund !"})
            res.status(200).json(group)
    }catch(err){res.status(500).json({message : err.message})}
}
const store = async (req,res)=>{
    try{
        const newGroup =  Group(req.body)
        const groupSaved = await newGroup.save()
        res.status(201).json(groupSaved)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}
const update = async (req,res)=>{
    try{
        const groupUpdated = await Group.findByIdAndUpdate(req.params.id,req.body)
        if(!groupUpdated) return res.status(400).json({message : "group not exist !"})
        res.status(200).json(groupUpdated)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const destroy =async (req,res)=>{
    try{
        const groupDeleted = await Group.findByIdAndDelete(req.params.id)
        if(!groupDeleted) return res.status(400).json({message : "this group not exist !"})
        res.status(200).json({message : "group deleted !"})
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const getCours = async (req,res)=>{
    try{
        const cours = await Cours.find({groups : req.params.id})
        if(!cours) return res.status(400).json({message : "this group don't have a cours !"})
        res.status(200).json(cours)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const getPresences = async (req,res)=>{
    try{
        const presences = await Presence.find({group : req.params.id})
        if(!presences) return res.status(400).json({message : "this group haven't a presence !"})
        res.status(200).json(presences)
    }catch(err){res.status(500).json({message : err.message})}
}
module.exports={
    index,show,store,update,destroy,getCours,getPresences
}