/*
    SETUP
*/
// Express
var express = require('express');   // We are using the express library for the web server
var app = express();            // We need to instantiate an express object to interact with the server in our code
PORT = 9852;                 // Set a port number at the top so it's easy to change in the future
// Database
//var db = require('./db-connector')

/*
    ROUTES
*/
const path = require('path');
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/Pages/index.html'));
});

app.get('/campaigns', function (req, res) {
    res.sendFile(path.join(__dirname, 'Pages/campaigns.html'));
});
/*
    LISTENER
*/
app.listen(PORT, function () {            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});