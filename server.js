const express = require('express')
const cors = require('cors')

const port  = 3000
const app = express()
const {user, boats, hostBoats} = require('./db/db')

app.use(cors())
app.use(express.json())

app.get('/api/boats', (req, res)=> {
    res.status(200).json(boats)
})

app.get('/api/merchantBoats', (req, res) => {
    res.status(200).json(hostBoats)
})

app.get('/api/boats/:id', (req,res) => {
    const boatId = req.params.id
    const selectedBoat = boats.find(boat => boat.id === boatId)
    res.status(200).json(selectedBoat)
})

app.post('/api/login', (req,res) => {
    const {email, password} = req.body
    if (email !== user.email) {
        res.status(400).json({message: "Invalid credentials"})
    } else  if (password !== user.password) {
        res.status(400).json({message: "Invalid credentials"})
    }
    res.status(200).json({email, password})
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})