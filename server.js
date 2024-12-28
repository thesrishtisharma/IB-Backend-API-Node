// Example using http module
// const http = require('http');

// // creating an HTTP server
// const server = http.createServer((req, res) =>{
//     // Set response headers
//     res.writeHead(200, {'Content-Type': 'text/html'});

//     // write response to content
//     res.write('<h1>This is working</h1>');
//     res.end();
// })

// // specify the port to listen on
// const port = 3000;

// // start the server
// server.listen(port, () =>{
//     console.log(`Node.js server started on port ${port}`);
// });

// Server using express.js
const express = require('express');
const app = express();

// Include route files
const apiRoutes = require('./routes/api.js');

// specifying the port and starting the server
const port = 3000; 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Defining a route using express.js
app.get('/', (req, res) => {
    res.send('The resource you are looking for has been removed or temporarily disabled.');
});

app.get('/api', (req, res) => {
    res.send('Express server is up and running');
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount the admin routes under '/api/IB/private/admin'
app.use('/api/v2/IB', apiRoutes);