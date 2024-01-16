// app.use


// app.use((req, res, next) => {
//     console.log('This middleware runs for every request');
//     next();
//   });

//  1- Commonly used for general-purpose middleware that should run for every request.
//  2- It does not restrict based on HTTP method.



//   app.all


// app.all('/example', (req, res, next) => {
//     console.log('This middleware runs for all HTTP methods on /example');
//     next();
//   });
  
// 1-  Specifically used when you want to apply middleware to a particular path for all HTTP methods.
// 2-  Suitable for defining middleware for a specific route that should run regardless of the HTTP method used.



// example using both


const express=require('express')
const app=express()

        // Middleware for all requests
        app.use((req, res, next) => {
          console.log('This middleware runs for every request');
          next();
        });

        // Middleware for a specific route and all HTTP methods
        app.all('/example', (req, res, next) => {
          console.log('This middleware runs for all HTTP methods on /example');
          next();
        });

        // Route handler for GET request to /example
        app.get('/example', (req, res) => {
          res.send('Response for GET /example');
        });

        app.listen(200)