const express = require('express')

const app = express()

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


app.listen(3000,()=>{
    console.log("Running..")
})