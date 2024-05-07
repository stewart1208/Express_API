const Admin = require('../models/adminModel')
const index = async (req,res)=>{
    try{
        const admins = await Admin.find()
        res.status(200).json(admins)
    }catch(err){
        res.status(500).json({message : err})
    }
}
const show = async (req,res)=>{
    try{
        const admin = await Admin.findById(req.params.id)
        if(!admin)return res.status(404).json({message : "admin not fund !"})
        res.status(200).json(admin)
    }catch(err){
        res.status(500).json({message : err})
    }
}
const store = async (req,res)=>{
    try{
        const newAdmin = new Admin(req.body)
        const adminSaved = await newAdmin.save()
        res.status(201).json(adminSaved)
    }catch(err){
        res.status(400).json({message : err})
    }
}
const update = async (req,res)=>{
    try{
        const AdminUpdeted = await Admin.findByIdAndUpdate(req.params.id,req.body,{new : true})
        if(!AdminUpdeted){
            return res.status(404).json({message : "admin not fund ! "})
        }
        res.status(200).json(AdminUpdeted)
    }catch(err){res.status(400).json({message : err})}
}
const destroy = async (req,res)=>{
    try{
        const adminDeleted = await Admin.findByIdAndDelete(req.params.id)
        if(!adminDeleted)return res.status(404).json({message : "admin not existe"})
        res.status(200).json({message:"admin deleted !"})
    }catch(err){res.status(500).json({message : err})}
}
module.exports={
    index,show,store,update,destroy
}