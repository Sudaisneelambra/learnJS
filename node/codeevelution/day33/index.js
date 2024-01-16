const http=require("http")

const man=http.createServer((request,response)=>{

    response.writeHead(200,{"content-Type":"text/plane"})
    response.end("<h1>sudais neelambra <h1>")

})
man.listen(200,()=>{
    console.log("the server work on 200 port");
})


// from html


// const http=require("http")
// const fs=require("fs")
// const man=http.createServer((request,response)=>{

//     const man=fs.readFileSync("./new.html","utf-8")
//     response.writeHead(200,{"content-Type":"text/html"})
//     response.end(man)

// })
// man.listen(200,()=>{
//     console.log("the server work on 200 port");
// })



// another

// const http=require("http")
// const fs=require("fs")
// const man=http.createServer((request,response)=>{

 
//     response.writeHead(200,{"content-Type":"text/html"})
//     fs.createReadStream(__dirname+"/new.html").pipe(response)


// })
// man.listen(200,()=>{
//     console.log("the server work on 200 port");
// })

