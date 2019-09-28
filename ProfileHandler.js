// JavaScript source code
var http = require('http');
var fs = require('fs');
const file = editJsonFile = require("edit-json-file");


module.exports = {
    getUserData: function (userID) {
        var data = fs.readFileSync("Users.json");
        var jsonContent = JSON.parse(data);
        //console.log(JSON.stringify(jsonContent[userID]));
        return jsonContent[userID];
    },

    createUser: function (typeIn, fNameIn, lNameIn, imgUrlIn, descIn, tagsIn) { 
        var data = fs.readFileSync("Users.json");
        var jsonContent = JSON.parse(data);

        var newID = Object.keys(jsonContent).length + 1;
        tag = tagsIn.split(",");

        let file = editJsonFile(`${__dirname}/Users.json`);
        var tagArray = "["
        for (var i = 0; i < tag.length; i++) {
            tagArray += `"${tag[i]}"`;
            if (i != tag.length - 1)
                tagArray += ",";
        }
        tagArray += "]";

        file.set(`${newID}`, JSON.parse(`{"type":"${typeIn}","fName":"${fNameIn}","lName":"${lNameIn}","profileImage":"${imgUrlIn}","description":"${descIn}","tags":${tagArray}}`));
        file.save();
        return 1 + "";

    },
    bar: function () {
    }
};