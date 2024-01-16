const http=require("http")
const fs=require("fs")
const man=http.createServer((request,response)=>{

    let name="sudais"
    response.writeHead(200,{"content-Type":"text/html"})
    let man=fs.readFileSync("./index.html","utf-8")
    man=man.replace("{{name}}",name)
    response.end(man)

})
man.listen(200,()=>{
    console.log("the server work on 200 port");
})