// JavaScript source code
var http = require('http');
var handler = require('./Profilehandler.js')


//create a server object:
http.createServer(function (req, res) { 
    handler.createUser("a", "a", "a", "a", "a", []);
    res.write(JSON.stringify(handler.getUserData(1)));
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080