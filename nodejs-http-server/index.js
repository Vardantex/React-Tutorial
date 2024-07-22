
const express = require("express");

const app = express();

app.get("/",(req,res) => {
    
    console.log(req.method);



res.set("Content-Type","text/plain");




res.cookie("username", "john")
res.cookie("age","35");

// recieve cookies sent
console.log(req.headers.cookie);


res.send("HEllo from server");

}); 


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

