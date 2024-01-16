

const http=require("http")
const fs=require("fs")
const url=require("url")

http.createServer((req,res)=>{

    q=url.parse(req.url,true);
    // console.log(q);
    // console.log(q.pathname);

   if(q.pathname=='/')
   {
    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(data)
        res.end()


    })
   }
   else if(q.pathname=='/signup')
   {
    fs.readFile('signup.html',(err,data)=>{
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(data)
        res.end()
    })
   }
   else if(q.pathname =='/logged')
   {
        res.writeHead(200,{'content-Type':'text/html'})
        console.log(q.query);
        res.write('<h1>'+q.query.fnam+'</h1>')
        res.write('<h1>'+q.query.lname+'</h1>')
        res.write('<h1>'+q.query.phone+'</h1>')

        res.end()
   }
   else{
    res.write("error url")
    res.end()
   }
}).listen(3000,()=>{
    console.log("loaded");
})