var http = require('http');
var login = require('./login');


//create a server object:
http.createServer(function (req, res) {
  login.validateLogin('user1','2');
  res.write('Hello World!'); //write a response to the client
  
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
