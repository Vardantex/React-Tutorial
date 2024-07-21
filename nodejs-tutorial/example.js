
const fs = require("fs");


function readFile(){
    fs.readFile("./readme.txt","utf8",(err, data) => {

        if(err) {
        console.log("error reading the file", err);
        return;
    }

    console.log("file contents: ", data);    
    });
}

function showMessage() {

    console.log("This is a message from example.js");
    
}


module.exports = {
    readFile,
    showMessage,
}
