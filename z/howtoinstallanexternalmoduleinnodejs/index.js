/* 
To install an external module, use, npm or yarn, the command is:
npm install modulename
or
npm i modulename

After we install an external module,it will exist in node_modules folder.

You can go to: https://www.npmjs.com/
To check out the external modules available. Modules help us to implement functionality such as building an http web server, handling file I/O operations, managing databases,etc..
*/

//Notice, since 'express' is an external module, we just include the module name without ./ inside double/single quotes. express module helps us to build web applications and APIs easily.
const express = require("express");

// Another external module called 'axios' which helps us to make HTTP requests such as GET,POST,PUT,DELETE,PATCH,HEAD ...
const axios = require("axios");

async function fetchData() {
  try {
    // Make a GET request using Axios, axios.get returns a promise so we use await. Remember making a request to an external source and receive data takes some time so we used async and await to wait until we get the data
    const response = await axios.get(
      "https://raw.githubusercontent.com/iso1983/bigtxtFileLink/main/message.txt"
    );

    // response object has data property that shows the data received from the url
    console.log("Response Data:", response.data);
  } catch (error) {
    // Handle errors
    console.error("Error:", error.message);
  }
}

// Call the function to fetch data
fetchData();
