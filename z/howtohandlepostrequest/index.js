const express = require("express");
const fs = require("fs"); // built-in file system module
const multer = require("multer"); //This module is used for handling file uploads and handling form-data

const app = express();

const upload = multer();

// Each app.use(middleware) is called every time a request is sent to the server. 'use' is a method to configure the middleware used by the routes of the Express HTTP server object. In this case everytime a request is made to an endpoint, express.json() and express.text() and express.urlencoded({ extended: true }) middlewares are called. If you don't use these middlewares below then this backend code can't handle the JSON data,plain text or form-data coming from the client.Express natively parses request bodies, but it doesn't parse them in specific formats like JSON or URL-encoded form data by default. For handling JSON request bodies, you need to use middleware like express.json() to parse incoming request bodies for POST, PUT,PATCH,DELETE requests. To handle plain text and form-data, we also need to use other middlewares.
app.use(express.json()); // Middleware to parse body that has JSON data
app.use(express.text()); //Middleware to parse body that has plain text
app.use(express.urlencoded({ extended: true })); //Middleware to parse body that has x-www-form-urlencoded

let newsData = {};

fs.readFile("news.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    // Parse the JSON data into a JavaScript object
    newsData = JSON.parse(data);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
});

app.get("/news", (req, res) => {
  //   res.set("Content-Type", "application/json");

  //when using res.json() method, Express automatically sets the appropriate response headers and converts the JavaScript object to JSON format before sending it. so we don't have to manually set the Content-Type. When you use res.json(), Express sets the HTTP status code to 200 by default.
  res.json(newsData);
});

app.get("/news/sports/:id", (req, res) => {
  // req.params gives us the path parameters
  console.log(req.params);
  const { id } = req.params;
  let idExists = false;

  newsData.sports.forEach((data) => {
    // do not use === in this case,because it checks for type and value, we used 'number' type for id in newsData but the incoming 'id' from user is string
    if (data.id == id) {
      idExists = true;
      res.json(data);
      return;
    }
  });
  // If news with the id not found then send this response
  if (!idExists) {
    // 404 status code means not found
    res.status(404).send("News not found");
  }
});

// A 'post' request is a type of HTTP request method where the user/client sends data from the frontend in the request body so that the backend can access this data and process it.The data sent in the body can be a type of json,plain text, form data ...For this route "/news/sports", we want the frontend to make a POST request where body having JSON data
app.post("/news/sports", (req, res) => {
  let idExists = false;
  newsData.sports.forEach((data) => {
    if (data.id == req.body.id) {
      idExists = true;
    }
  });

  // If id doesn't exist,we can insert this new news into the sports category
  if (!idExists) {
    try {
      // append the new incoming news from the client/frontend to the existing news from news.json file
      newsData.sports.push(req.body);
      //   write the new news with the existing ones back to news.json file
      fs.writeFileSync("news.json", JSON.stringify(newsData), "utf8");
      console.log("Data written to file successfully.");
      // res.send returns Content -Type  text/html . When you use res.send(), Express sets the HTTP status code to 200 by default
      res.send("News created");
    } catch (error) {
      console.error("Error writing to file:", error);
      // 500 status code means Internal Server Error
      res.status(500).send("Something went wrong");
    }
  } else {
    // 400 status code means bad request
    res.status(400).send("id already exists");
  }
});

/*
For this route "/message", the client/frontend will make a POST request again,and remember for all POST requests we can handle the body having:
- raw text , because we set the middleware: app.use(express.text())
- x-www-form-urlencoded , because we set the middleware: express.urlencoded({ extended: true })
- raw JSON , because we set the middleware: express.json()
*/
app.post("/message", (req, res) => {
  console.log(req.body);
  res.send("from message");
});

//For this route "/login", the frontend will send form-data. To handle form-data, we use multer module and we need to pass the middleware upload.none() to parse the form-data. The form-data will be available in req.body. express can't handle form-data type by default, that is why we use the external 'multer' module.Remember we can still send JSON data, plain text,x-www-form-urlencoded for this route '/login' but ı want to demonstrate how to handle form-data in POST body for this route "/login".
app.post("/login", upload.none(), (req, res) => {
  console.log(req.body.username);
  res.send("from login");
});

// Start the server and listen on the defined port
app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
