const express=require('express')
const router=require('./route/subject.route')

const app = express()
app.use(express.json())
app.use('/subjects', router)

app.get('/', (req, res) => {
    res.send('Prova Rodrigo Dia 15/09/2021')
})

const port=6090
app.listen(port, () => {
console.log(`Server Started on Port: ${port}`)
})