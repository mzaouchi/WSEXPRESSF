const express = require('express')

const app = express()

const port  = 5000

const MiddleWare=(req,res,next)=>{
    console.log("Hello Yaakoub")
    next()
}

app.use(MiddleWare)

app.get('/test',MiddleWare,(req,res)=>{
    res.send('Yaakoub')
})

app.get('/balise',(req,res)=>{
    res.send('<h1>Marwa</h1>')
})

// app.get('/PageContact',(req,res)=>{
//     res.sendFile(__dirname+'/public/Contact.html')
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+'/public/style.css')
// })

// app.get('/Ghazi',(req,res)=>{
//     res.sendFile(__dirname+'/public/')
// })

app.use(express.static('public'))


app.listen(port,console.log(`Server is running on the port ${port}`))