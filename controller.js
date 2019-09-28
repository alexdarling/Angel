var http = require('http');
var login = require('./login');
var profile = require('./ProfileHandler');
var fs = require('fs');
var url = require('url');


//create a server object:
http.createServer(function (req, res) {

  var q = url.parse(req.url, true);
  
  
  //console.log(q);
    if (q.pathname == "/login") {
        //console.log("hey got here");

        var qdata = q.query;

        console.log(qdata.username);
        console.log(qdata.password);

        console.log(login.validateLogin(qdata.username, qdata.password));

    } else if (q.pathname == "/create-account") {
        var qdata = q.query;

        var type = qdata.type;
        var fname = qdata.fname;
        var lname = qdata.lname;
        var imgurl = qdata.imgurl;
        var description = qdata.description;
        var tags = qdata.tags;
        console.log(tags);

        profile.createUser(type, fname, lname, imgurl, description, tags);

        



    } else {
  
  	fs.readFile('index.html', function(err, data) {
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data);
    	res.end();
  	});
  
  }
  //res.write('Hello World!'); //write a response to the client
  
  //res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
