


const express = require("express");

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
  
