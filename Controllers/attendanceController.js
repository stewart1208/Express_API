const Cours = require('../models/CoursModel')
const Amount = require('../models/amountModel')
const Salary = require('../models/Salary')
const Attendance = require('../models/attendance')
const Teacher = require('../models/teacherModel')

const store = async (req,res)=>{
    try{
        const newAttendance = Attendance(req.body)
        const attendanceSaved = await newAttendance.save()
        await createOrIncrementAmount(attendanceSaved)
        res.status(201).json(attendanceSaved)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const index = async (req,res)=>{
    try{
        const attendances = await Attendance.find().populate('student group');
        res.status(200).json(attendances)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const show = async (req,res)=>{
    try {
        const attendance = await Attendance.findById(req.params.id).populate('student group');
        if(!attendance) return res.status(404).json({message : "Attendance not existe !"})
        res.status(200).json(attendance)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const createOrIncrementAmount =  async (attendance) => {
    try{
        const cours = await Cours.findOne({groups: attendance.group})
        const amount = await Amount.findOne({student: attendance.student})
        if(amount){
            amount.totale += cours.prix
            amount.debt += cours.prix
            await amount.save()
        }else{
            const newAmount = new Amount({
                totale: cours.prix,
                debt: cours.prix ,
                student: attendance.student
            });
            await newAmount.save();
        }
       await createOrIncrementSalary(cours)
    }catch(err){res.status(500).json({message : err.message})}
}
const createOrIncrementSalary = async (cours) => {
    try{
        const teacher = await Teacher.findOne({courses:cours})
    const salary = await Salary.findOne({teacher:teacher})
    if(salary){
        salary.salary += (cours.prix)*0.4
        salary.debt += (cours.prix)*0.4
        await salary.save()
    }else{
        const newSalary = new Salary({
            teacher: teacher,
            salary: (cours.prix)*0.4 ,
            debt: (cours.prix*0.4) ,
        })
        await newSalary.save()
    }
    }catch(err){res.status(500).json({message : err.message})}
}

module.exports = {
    store,index,show
}