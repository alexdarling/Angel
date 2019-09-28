// JavaScript source code
var http = require('http');
var loginData = require('./GetProfileData.js')


//create a server object:
http.createServer(function (req, res) { 
    res.write(JSON.stringify(loginData.getUserData(1)));
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080