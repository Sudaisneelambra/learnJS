// const express =require('express')

// const app=express()

// console.log(process.env);

// console.log(app.get('env'));

// app.listen(300,()=>{
//     console.log("server is running");
// })


// Import required modules
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({path:'one.env'});

// Create an Express application
const app = express();

// Access environment variables
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// Define a route that uses the environment variables
app.get('/', (req, res) => {
  res.send(`Connecting to the database at ${dbHost} with user ${dbUser}`);
});

// Start the server
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
