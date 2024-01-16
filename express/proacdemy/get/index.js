
// // GET


// const express=require('express')
// const fs=require('fs')
// const path = require('path')
// let app=express()

// app.use(express.json())

// console.log(__dirname);

// let movies= JSON.parse(fs.readFileSync(path.join(__dirname,'data', 'movies.json')))


//     //GET  - api/movies

// app.get('/api/v1/movies',(req,res)=>{
//     res.status(200).json(
//         {
//             status:"success",
//             count:movies.length,
//             data:{
//                 movies:movies
//             }
//         }
//     )
//     console.log(movies);
// })




// // POST 



// app.post('/api/v1/movies',(req,res)=>{

//     const newId=movies[movies.length-1].id+1
//     const newMovies=Object.assign({id:newId},req.body)

//     movies.push(newMovies)
//     fs.writeFile(path.join(__dirname,'data', 'movies.json'),JSON.stringify(movies),(err)=>{
//         res.status(201).json({
//             status:"success",
//             data:{
//                 movies:newMovies
//             }

//         })
//     })

//     console.log(req.body);
//     // res.send("created")
// })


// // patch



// app.patch('/api/v1/movies/:id',(req,res)=>{
//     const id=req.params.id*1
//     console.log(id);
//     let movieUpdate=movies.find((el)=>{
//        return el.id===id
//     })

//     console.log("kunnesh");

//     if(!movieUpdate || movieUpdate ===undefined)
//     {
//        return res.status(404).json({
//             status:"failed",
//             meassage:`no movie object in ${id} is found`
//         })
//     }


//     let index=movies.indexOf(movieUpdate)

//     Object.assign(movieUpdate,req.body)
//     movies[index]=movieUpdate


//     fs.writeFile(path.join(__dirname,'data', 'movies.json'),JSON.stringify(movies),(err)=>{
//         res.status(200).json({
//             status:"success",
//             data:{
//                 movies:movieUpdate
//             }

//         })
//     })

// })

// // DELETE

// app.delete('/api/v1/movies/:id',(req,res)=>{
//     const id=req.params.id *1
//     const dtl= movies.find(el=> el.id===id)
//     if(!dtl || dtl ===undefined)
//     {
//        return res.status(404).json({
//             status:"failed",
//             meassage:`no movie object in ${id} is found`
//         })
//     }

//     index=movies.indexOf(dtl)

//     movies.splice(index,1)
//     fs.writeFile(path.join(__dirname,'data', 'movies.json'),JSON.stringify(movies),(err)=>{
//         res.status(204).json({
//             status:"success",
//             data:{
//                 movies:null
//             }

//         })
//     })

// })





// // listner


// const port=3000
// app.listen(port,()=>{

//     console.log("server has started with port"+port);
// })




const express = require('express')
const app = express()
const path = require("path")
const fs = require('fs')
const user = JSON.parse(fs.readFileSync(path.join(__dirname,'data', 'user.json')))
console.log(user);
console.log(__dirname)
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.get("/api/v1/movies",(req,res)=>{
    res.status(200).json({
        status:"success",
        data:user
    })
    console.log(user);
})
app.post('/api/v1/movies',(req,res)=>{
    const newId=user[user.length-1].id+1
    const newMovies=Object.assign({id:newId},req.body)
    console.log(req.body);
    console.log(newMovies);
    user.push(newMovies)
    fs.writeFile(path.join(__dirname,'data', 'user.json'),JSON.stringify(user),(err)=>{
        res.status(201).json({
            status:"success",
            data:{
                user:newMovies
            }
        })
    })
    console.log(req.body);
    // res.send("created")
})
app.listen(3000,function(){
    console.log('server start');
})
