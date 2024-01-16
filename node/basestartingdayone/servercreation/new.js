// creating new server

let man=require("http")

let sin=man.createServer((req,res)=>{
    res.setHeader('content-Type','text/plain')
    res.write("<h1>sudais anu neelambra manhappetty koorad vaniyambalam</h1>")
    res.end()

})
const port=3000
sin.listen(port,()=>{
    console.log(`server running in ${port} server`);
})