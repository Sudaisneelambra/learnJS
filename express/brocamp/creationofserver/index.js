const express=require('express')

const app=express()

app.get('/',(req,res)=>{

    res.send('hellow')

})


app.get('/about',(req,res)=>{
    res.send("about")
})

app.listen(4000,()=>{
    console.log("running on port 4000");
})