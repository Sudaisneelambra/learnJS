
// const express = require('express');
// const app = express();


// app.get('/', (req, res) => {
//   res.send('Hello, this is the home page!');
// });


// app.get('/about', (req, res) => {
//   res.send('This is the about page.');
// });

// app.get('/users/:userId', (req, res) => {
//   const userId = req.params.userId;
//   res.send(`You requested information for user ${userId}`);
// });


// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });



// anoter

                    // Import required modules
                    const express = require('express');
                    const app = express();

                    // Create a router
                    const mainRouter = express.Router();

                    // Define routes for the main router
                    mainRouter.get('/', (req, res) => {
                    res.send('Hello, this is the main page!');
                    });

                    mainRouter.get('/about', (req, res) => {
                    res.send('This is the about page.');
                    });

                    // Create another router
                    const userRouter = express.Router();

                    // Define routes for the user router
                    userRouter.get('/:userId', (req, res) => {
                    const userId = req.params.userId;
                    res.send(`You requested information for user ${userId}`);
                    });

                    // Use the routers in the main application
                    app.use('/', mainRouter);
                    app.use('/users', userRouter);

                    // Start the server
                    const PORT = 3000;
                    app.listen(PORT, () => {
                    console.log(`Server is listening on port ${PORT}`);
                    });
