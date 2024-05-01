

const index = (req,res)=>{
    res.send('all students')
}
const show = (req,res)=>{
    res.send(`student with id : ${req.params.id}`)
}
const create = (req,res)=>{
    res.send('student create page !')
}
const store = (req,res)=>{
    res.send(`${req.body} ,student is created !`)
}
const edit =(req,res)=>{
    res.send('student edity page')
}
const update = (req,res)=>{
    res.send(`${req.body} , student is modifed`)
}
const destroy = (req,res)=>{
    res.send(`${req.params.id} , student is destroied`)
}
module.exports = {
    index,show,create,store,edit,update,destroy
}