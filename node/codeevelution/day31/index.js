const http=require("http")

const man=http.createServer((request,response)=>{

    response.writeHead(200,{"content-Type":"text/plain"})
    response.end("hellow machane")

})
man.listen(300,()=>{
    console.log("the server work on 300 port");
})