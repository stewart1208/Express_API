const express = require('express')
const app = express()
const studentsRoute = require('./routes/studentsRouts')
const teachersRoute = require('./routes/teachersRoutes')
app.use(express.json())

const port = 3000
app.get('/', (req, res) => {
  res.send('Welcome page')
})

app.use('/students',studentsRoute)
app.use('/teachers',teachersRoute)

app.listen(port, () => {
  console.log(`Serveur runing in http://localhost:${port}/`)
})