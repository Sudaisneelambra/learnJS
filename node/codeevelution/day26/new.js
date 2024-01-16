

const fs= require("fs")

// readfileasync


//one method
// const word=fs.readFileSync("./index.txt","utf-8")  
// console.log(word);

//two method
// const word=fs.readFileSync("./index.txt")  
// console.log(word.toString());



// readfile


// one method

// const word=fs.readFile("./index.txt","utf-8",(err,data)=>{

//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }

// })  



fs.writeFileSync("./greet.txt","hellow my dear friend")  //creating new file

// rewrite the great file


fs.writeFile("./greet.txt"," hellow my love", {flag: "a"},(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("rewrited");
    }
}) 