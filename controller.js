var http = require('http');
var login = require('./login');
var profile = require('./ProfileHandler');
var fs = require('fs');
var url = require('url');


//create a server object:
http.createServer(function (req, res) {

  var q = url.parse(req.url, true);
  
  
  //console.log(q);
  if(q.pathname=="/login"){
  	//console.log("hey got here");
  	
  	var qdata = q.query;
  	
  	console.log(qdata.username);
  	console.log(qdata.password);
  	
		var id = login.validateLogin(qdata.username,qdata.password);
		res.write(""+id);
		res.end();
  	
  /*
  else if(q.pathname=="/afterLogin"){
  	
  	fs.readFile('afterLogin.html', function(err, data) {
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data);
    	res.end();
  	});
  	
  
  }
  */
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

  } else if(q.pathname == "/" || q.pathname == ""){0
  	fs.readFile('index.html', function(err, data) {
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data+"");
    	res.end();
  	});
  
  }else{
  	var filePath = "."+q.pathname;
		if (filePath.endsWith("html") || filePath.endsWith("txt")) {
			fs.readFile(filePath, function(err, data) {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data + "");
				res.end();
			});
		} else if (filePath.endsWith("css")) {
			fs.readFile(filePath, function(err, data) {
				res.writeHead(200, {'Content-Type': 'text/css'});
				res.write(data + "");
				res.end();
			});
		} else if (filePath.endsWith("js")) {
			fs.readFile(filePath, function(err, data) {
				res.writeHead(200, {'Content-Type': 'text/javascript'});
				res.write(data + "");
				res.end();
			});
		} else if (filePath.endsWith("png")) {
			fs.readFile(filePath, function(err, data) {
				res.writeHead(200, {'Content-Type': 'image/png'});
				res.write(data);
				res.end();
			});
		}

  }
  //res.write('Hello World!'); //write a response to the client
  
  //res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
