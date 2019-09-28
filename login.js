var fs = require('fs');

module.exports = {
  validateLogin: function (username, password) {
    
    var db = JSON.parse(fs.readFileSync('testcase.json','utf8'));
    
    for(var i = 0; i < db.length; i++){
    	element = db[i];
    	if((element.user == username)&&(element.password == password)){
    		//console.log(element.id);
    		return element.id;
    	}
    }
    return null;
    
  },
  bar: function () {
    
  }
};
