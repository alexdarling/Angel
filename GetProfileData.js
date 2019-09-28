// JavaScript source code
var http = require('http');
var fs = require('fs');


module.exports = {
    getEntrepeneurData: function (userID) {
    
        var data = fs.readFileSync("Entrepeneurs.json");
        var jsonContent = JSON.parse(data);

        if (userID >= jsonContent.users.length) {
            console.log(JSON.stringify(jsonContent[userID]));
            return jsonContent[userID];
        }
        return null;

    },

    bar: function () {

    }
};