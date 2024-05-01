

const index = (req,res)=>{
    res.send('all teachers')
}
const show = (req,res)=>{
    res.send(`teacher with id : ${req.params.id}`)
}
const create = (req,res)=>{
    res.send('teacher create page !')
}
const store = (req,res)=>{
    res.send(`${req.body} ,teacher is created !`)
}
const edit =(req,res)=>{
    res.send('teacher edity page')
}
const update = (req,res)=>{
    res.send(`${req.body} , teacher is modifed`)
}
const destroy = (req,res)=>{
    res.send(`${req.params.id} , teacher is destroied`)
}
module.exports = {
    index,show,create,store,edit,update,destroy
}