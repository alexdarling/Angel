var fs = require('fs');

module.exports = {
  validateLogin: function (username, password) {
    
    var db = JSON.parse(fs.readFileSync('testcase.json','utf8'));
    
    db.forEach(function(element){
    	if(element.user == username){
    		console.log("match");
    	}
    });
    
  },
  bar: function () {
    
  }
};
