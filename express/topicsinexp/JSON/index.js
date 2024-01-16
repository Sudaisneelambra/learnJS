const express=require("express")
const app=express()
const fs=require('fs')
const path=require('path')
const man=JSON.parse(fs.readFileSync(path.join(__dirname,'index.json')))

app.get('/',(req,res)=>{
    console.log(man);
    res.send(man)
})

app.listen(299,()=>{
    console.log("port is running in port"+299);
})
