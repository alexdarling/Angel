// JavaScript source code
var http = require('http');
var fs = require('fs');

module.exports = {
    getUserData: function (userID) {
        var data = fs.readFileSync("Users.json");
        var jsonContent = JSON.parse(data);
        //console.log(JSON.stringify(jsonContent[userID]));
        return jsonContent[userID];
    },

    bar: function () {
    }
};