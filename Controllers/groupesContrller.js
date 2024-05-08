const Group = require('../models/groupModel')

const index = async (req,res)=>{
    try{
        const groups = await Group.find()
        res.status(200).json(groups)
    }catch(err){res.status(500).json({message : err.message})}
}
const show = async (req,res)=>{
    try{
        const group = await Group.finById(req.params.id)
        if(!group) return res.status(404).json({message : "group not fund !"})
            res.status(200).json(group)
    }catch(err){res.status(500).json({message : err.message})}
}
