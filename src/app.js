const express = require("express")

const app = express()

app.use('/',(req,res,next)=>{
    next()
})
app.use('/test',(req,res)=>{
    res.send("Hello World")
})

app.listen(7777,()=>console.log("Server is Started...."))