

const express = require("express")

const app = express();


app.use((req,res,next) =>{
    console.log(`From middleware, ${req.method} request recieved for ${req.url}`);

    next();



})

app.use((req,res,next) => {
    console.log("from the second middleware");

    req.user = "john";

    next();
})

app.get("/", (req, res) =>{
console.log(req.user);
res.send("Hi from main route")
})


// run on the route /message 
app.get("/message", (req,res,next) => {
    console.log("middleware attached to speciffic route");
    console.log(req.user);
    next();
}, 
    (req,res, next) => {
    console.log("From /message second middleware")
        next();
}, (req,res) => {
    res.send("This is from the 3rd");
})


// for any unknown routes, send a 404
app.use((req,res) => {

    console.log(321)
    res.status(404).send("Unknown route found")
})

app.listen(5000, ()=>{
    console.log("Server Run on port 5000");
})

