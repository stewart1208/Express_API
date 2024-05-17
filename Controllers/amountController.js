const Amount = require('../models/amountModel')

const paying = async (req,res)=>{
    try {
        const amount = await Amount.findById(req.params.id)
        if(!amount) return res.status(400).json({message : "amount not existe !"})
        const amountPayed = req.body.amountPayed 
        amount.amountPayed += amountPayed
        amount.debt -= amountPayed
        amount.save()
        res.status(200).json(amount)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const getAllAmounts = async (req,res)=>{
    try{
        const amounts = await Amount.find().populate('student')
        res.status(200).json(amounts)
    }catch(err){
        res.status(500).json({message : err.message })
    }
}
const getByStudent = async(req,res)=>{
    try{
        const amount = await Amount.find({student : req.params.id }).populate('student')
        if(!amount) return res.status(404).json({message : "amount not exist "})
        res.status(200).json(amount) 
    }catch(err){res.status(500).json({message : err.message})}
}

module.exports={
    paying,getAllAmounts,getByStudent
}