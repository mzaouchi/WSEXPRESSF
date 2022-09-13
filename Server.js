const express = require('express')

const app = express()


const port = 5000

var users =[
    {name :'Yaakoub', old : 3, id:1},
    {name :'Amir', old : 2, id:2},
    {name :'Maroua', old : 4, id:3}
]

app.use(express.json())

app.get('/getUsers',(req,res)=>{
    res.send(users)
})

app.post('/addUser',(req,res)=>{
    users = [...users,req.body]
    res.send(users)
})

app.delete('/deleteUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.filter(user=> user.id != id)
    res.send(users)
})

app.put('/updateUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.map(user=> user.id == id ? {...user,...req.body} : user)
    res.send(users)
})


app.listen(port,console.log(`Server is running on the port ${port}`))