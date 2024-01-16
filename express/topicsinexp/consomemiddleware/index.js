const express=require('express')
const app=express()


function middle(req,res,next){

    const one=true
    req.one=one
   console.log("athanne njmmakk vandath");
    next()
}

function sunnamani(req,res,next){

    if(req.one)
    {
        console.log("work cheythedaa");
        next()
    }
   


}

app.get('/',middle,sunnamani,(req,res)=>{

    res.send("hellow machane")
})



app.listen(200)