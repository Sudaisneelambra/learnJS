// promis

// const fs=require("node:fs/promises")

// console.log("first");

// fs.readFile("./new.txt","utf-8")
// .then((e)=>{
//     console.log(e);
// })
// .catch((err)=>{
//     console.error(err)
// })

// console.log("second");


// async

const fs=require("node:fs/promises")

async function readfile(){
    try{
        const data=await fs.readFile("./new.txt","utf-8")
        console.log(data);
    }
    catch(err)
    {
        console.log(err);
    }
}
readfile()
