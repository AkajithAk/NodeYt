const express = require('express')

const app = express()

app.use(express.json())

const data = [
    {name:"demo"},
    {name:"demo"},
    {name:"demo"},
    {name:"demo"},
    {name:"demo"},
    {name:"demo"}
]

app.get('/getData',(req,res)=>{
    res.send(data)
})

app.post('/postCall',(req,res)=>{
    console.log(req.body,"res")
    if(req.body.email == "abc@mail.com" && req.body.password == "12345"){
        res.send(req.body)
    }else{
        res.status(401).send("error")
    }
})


app.listen(3000,()=>{
    console.log("Running..")
})