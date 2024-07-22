const express = require("express");

const app = express();

//A middleware in Node.js is a function that performs an action before the request continues to be processed by the server. Middleware functions have access to the request(req) and response(res) objects, allowing them to inspect, modify, or handle the incoming request before it reaches the main server logic. Additionally, middleware functions can either pass control to the next middleware in the chain or terminate the request-response cycle automatically accesses the request and response objects. We can use the app.use() method to set a middleware or attach a middleware to a specific route. Each app.use(middleware) is called every time a request is sent to the server. 'use()' is a method to configure the middleware used by the routes of the Express HTTP server object.

// Below we passed a middleware/function to the use() method that automatically gets 3 parameters those are request,response and next objects and we named these parameters as req,res,next, you can name them as anything you like.This middleware function will be executed for every incoming request.
app.use((req, res, next) => {
  console.log(`From middleware, ${req.method} request received for ${req.url}`);
  // Pass control to the next middleware function,If you don't call the next() function, we can't continue the rest of the code
  next();
});

// This middleware function will be executed for every incoming request.
app.use((req, res, next) => {
  console.log("From the second middleware");
  //Note that we can attach custom properties to the req object and use those properties from other middlewares or route handlers
  req.user = "john";
  // If you don't call the next() function, we can't continue the rest of the code
  next();
});

app.get("/", (req, res) => {
  console.log(req.user);
  res.send("Hi from main route");
});

app.get(
  "/message",
  // This is a middleware/function that runs for only this route /message,if you don't call the next() function, we won't continue to the second middleware
  (req, res, next) => {
    console.log("Middleware attached to specific route");
    console.log(req.user); //we can access the user property from here too
    next();
  },
  // This is the second middleware
  (req, res, next) => {
    console.log("From /message,second middleware");
    next();
  },
  // This is the third middleware
  (req, res) => {
    res.send("this is from the /message");
  }
);

// set a middleware that will run for all the unknown routes(routes that do not match any defined routes). The order is important, if this code below was above at the top, we couldn't make requests to other routes such as /message or the main route /
app.use((req, res) => {
  console.log(333);
  res.status(404).send("This route doesn't exist");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
