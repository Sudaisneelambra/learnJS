const express=require('express')
const path=require("path")
const app= express()

app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'new.html'))
})

app.listen(100,()=>{
    console.log("running on 100 th port");
})