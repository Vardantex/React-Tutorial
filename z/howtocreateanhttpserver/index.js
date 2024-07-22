// express module is a built-in module to create an http web server
const express = require("express");

const app = express();

/*

What is an HTTP web server? 
A web server is an application that receives requests from users via a web browsers or other tools, then process these requests and then generate appropriate responses.The responses may include serving web pages, files, or data, as well as executing server-side scripts to dynamically generate content. In summary, an HTTP web server facilitates communication between clients and web resources, serving as a bridge to deliver requested content over the internet.


-A client in an HTTP request means a person who makes a request to a url(Uniform Resource Locator) is a string of characters used to identify and locate a resource on the internet such as a webserver,website,image,file any digital content.
-A server,backend means, the machine that responds to those clients with some values such as data,images,text.This index.js code is the server code.


 app.get handles 'GET' HTTP request method made by the client/user. app.get() function takes minimum 2 arguments, first argument is the path to handle a request made by the client and the second argument is a callback function that gives us the request and response objects automatically, we named request as 'req' and response as 'res', those are just parameter names but the idea is we get these 2 values automatically.The req object represents the HTTP request that the server receives from the client. It contains information about the request, such as the URL, HTTP method, headers, parameters, query string, cookies, and sometimes the request body (for POST or PUT requests). The 'res' object represents the HTTP response that the server sends back to the client. It is used to send data back to the client, such as HTML content, JSON data, files, or any other type of response. Developers use the res object to set response headers, status codes, and to send the actual response data back to the client.
 */
app.get("/", (req, res) => {
  //   To display what requests are made by the client, go to the 'Network' tab in the browser, you will see the requests sent,sometimes browsers automatically send additional requests to get images like favicon.ico when they can't find a specific favicon declared. favicon is the website icon,tab icon,url icon or bookmark icon.Below we see the request object
  console.log(req);

  console.log(req.method); //  method property shows what type of request was made,we have request methods such as GET,POST,PUT,DELETE ...

  console.log(req.url); //url shows the request made for the path

  // query property gets the query parameters from the url, if a user made a request like this: http://localhost:5000/?username=john , query parameter is the username and query property get it for us.We can add more query parameters using & ,e.g: http://localhost:5000/?username=john&age=35
  console.log(req.query);

  /* 
    -In every http request there is a part called 'Headers' that exist in the client's request and also in the response from the server. Headers provides information about the request and the response made such as what type of web browser is used to make the request to a url/domain/website, what is the host for the request made, content types used in the body or response, cookies and more.

    -HTTP headers consist of key-value pairs where the key is the name of the header and the value is the associated data. 
  */

  //Diplays the headers sent by the client,req.headers is an object containing key-value pairs
  console.log(req.headers);

  // set method allows us to set headers for the response below. we set the Content-Type key and its value as text/plain, this means the server will send plain text back to the user. If we sent json data then we had to set Content-Type as application/json. express allows us to use res.json() method to send json without setting the Content-Type manually using res.set
  res.set("Content-Type", "text/plain");
  //   Remember these cookies are set below on the res object using cookie method so we send these 2 cookies back to the client and then after that, the client will always have these 2 cookies in the Headers of the client/user when sending more requests back to this endpoint "/"
  res.cookie("username", "john");
  res.cookie("age", "35");

  console.log(req.headers.cookie); // access the cookies received back from the client,remember we sent these cookies to the client from this backend code
  console.log(req.hostname); // main host machine url

  //Below, we send a response back to the client/user and the response has status code 200 which means 'ok' success. There are other status codes indicating different statuses such as 404 meaning not found or 401 unauthorized and more
  res.sendStatus(200);
});

/*
 app.get below handles requests made like this:
  http://localhost:5000/user/123/age/35

 notice that /:id represents the url path parameter like 123 and :age also represents another url path parameter
 */
app.get("/user/:id/age/:age", (req, res) => {
  // req.params gives us the path parameters
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.params.age);

  res.send("Okay");
});

// In networking, a port is a communication endpoint that allows different services or applications running on a single host to distinguish between different types of traffic or connections.Each port number is associated with a specific protocol or service, and it helps direct incoming data packets to the appropriate application or process running on a device. Web browsers use port 80 for HTTP connections by default. When you enter a URL without specifying a port, the browser assumes port 80 for HTTP connections.For secure HTTPS connections, web browsers use port 443 by default.Below we define a port that is 5000, you can define other numbers as long as they are not used by other applications. So this means that this web server can be accessed on port 5000 from a web browser or other communication tools. So web servers commonly use well-known ports such as 80 for HTTP and 443 for HTTPS, as well as other commonly used ports for specific services or applications.However, when developers run web servers on their local machines during development or testing, they often choose ports from 3000 and above to avoid conflicts with other services or applications running on the same machine.

// Start the server and listen on the defined port 5000.
app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
