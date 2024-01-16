const express=require('express')
const path=require("path")
const app= express()

// const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/signup',(req,res)=>{

    res.sendFile(path.join(__dirname,'new.html'))
})

app.post('/signupp',(req,res)=>{
    // res.send('account created')

    console.log(req.body);
    
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // const { username, email, password } = req.body;

    // Do something with the data (e.g., save it to a database)
    // For now, just send a response back
    res.send(`Account created with username: ${username}, email: ${email}, password: ${password}`);
})

app.listen(100,()=>{
    console.log("running on 100 th port");
})


