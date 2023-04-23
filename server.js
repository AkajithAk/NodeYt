const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.text())

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

app.post('/potApi',(req,res)=>{
    console.log(req.body,"demoqwqwqw")
    const reqData = JSON.parse(req.body)
    console.log(reqData,"parsed")

    if(reqData.name !== ""){
        res.json({
            data:req.body,
            msg:"Response from backend"
        })
    }else{
        res.status(401).send("error")
    }

})

app.listen(1000,()=>{
    console.log("Running......")
})