const Salle = require('../models/salleModel')

const index = async (req,res)=>{
    try{
        const salles = await Salle.find()
        res.status(200).json(salles)
    }catch(err){res.status(500).json({message : err.message})}
}
const show = async (req,res)=>{
    try{
        const salle = await Salle.findById(req.params.id)
        if(!salle)return res.status(404).json({message : "salle not fund ! "})
        res.status(200).json(salle)
    }catch(err){res.status(500).json({message : err.message})}
}
const store = async (req,res)=>{
    try{
        const newSalle = new Salle(req.body)
        salleSaved = await newSalle.save()
        res.status(201).json(salleSaved)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}
const update = async (req,res)=>{
    try{
        const salleupdated = await Salle.findByIdAndUpdate(req.params.id,req.body,{new : true})
        if(!salleupdated){
            return res.status(404).json({message : "salle not fund ! "})
        }
        res.status(200).json(salleupdated)
    }catch(err){res.status(400).json({message : err})}
}
const destroy = async (req,res)=>{
    try{
        const salledeleted = Salle.findByIdAndDelete(req.params.id)
        if(!salledeleted)return res.status(404).json({message : "ma3adnach had la salle khayou!"})
        res.status(200).json({message : "salle deleted"})
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

module.exports = {
    index,show,store,update,destroy
}