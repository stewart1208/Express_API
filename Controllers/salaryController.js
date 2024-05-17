const Salary = require('../models/Salary')

const payed = async (req,res)=>{
    try{
        const salary = await Salary.findById(req.params.id)
        if(!salary) return res.status(404).json({message : "salary not fund !"})
        salary.salaryPayed += req.body.salaryPayed
        salary.debt -= salaryPayed 
        salary.save()
    }catch(err){
        res.status(200).json({message : err.message})
    }
}

module.exports = {
    payed ,
}