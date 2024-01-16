const fs=require("node:fs")

const readableStream=fs.createReadStream("./new.txt",
{
    encoding:"utf-8"
})

const writableStream=fs.createWriteStream("./new1.txt")


readableStream.on("data",(chunk)=>{
    console.log(chunk);
    writableStream.write(chunk)
})