const http=require("http")

const man=http.createServer((request,response)=>{

    const man={
        name:"sudais",
        address:"neelambra"
    }

    response.writeHead(200,{"content-Type":"text/plain"})
    response.end(JSON.stringify(man))

})
man.listen(200,()=>{
    console.log("the server work on 300 port");
})