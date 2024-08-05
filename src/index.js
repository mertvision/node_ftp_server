/**
 * This file is the entry file for a Node FTP server (This file is the entry point for a Node.js application)
*/

// Import Statement of Third Party Modules (Libs)
const express = require("express");
const serve_index = require("serve-index");

// Server PORT value variable declaration and assigment
const PORT = 8080;

// Server variable declaration and assigment
const server = express();

// Server FTP middleware
server.use(
    '/ftp',
    express.static('public'),
    serve_index('public', {icons: true}),
);

// Server initialization function
async function init(){
    try{
        server.listen(PORT, ()=> {
            console.log("Server is running on localhost:"+PORT);
        });
    }
    catch(err){
            console.log("Server stopped running");
            process.exit(1);
    };
};

// Invoke init() function
init();