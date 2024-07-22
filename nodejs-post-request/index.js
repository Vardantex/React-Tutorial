

const express = require("express");
// built in file system module
const fs = require("fs");
// used for handling file uploads and form data
const multer = require("multer");

const app = express();
const upload = multer();



// Middleware to parse body that has JSON data
app.use(express.json());
// Parse in text
app.use(express.text());
// Parse the body that has x-wwww-form-urlendcoded
app.use(express.urlencoded({extended:true}))


let newsData = {};

fs.readFile("news.json","utf8",(err,data)=>{
    if(err){
        console.log("Error reading file: ", err);
        return;
    } 
    try {
        newsData = JSON.parse(data);

    } catch(error){
        console.log("Error parsing JSONL ", error);
    }
})

app.get("/news", (req,res) => {
    // res.set("Content-Type", express.application / json); //Old way

        // convers js objects into a json
        res.json(newsData);
})

app.get("/news/sports/:id", (req,res) =>{
console.log(req.params);
const { id } = req.params;
let idExists = false;

newsData.sports.forEach((data) => {
    
    if(data.id == id) {
        idExists = true;
        res.json(data)
        return;
    }

});

    if(!idExists){
        res.status(404).send("News not found")
    }


});

app.post("/news/sports",(req,res) => {
    let idExists = false;
    newsData.sports.forEach((data) =>{

        if(data.id == req.body.id){
            idExists = true;
        }
    })

    if(!idExists) {
        try{

            newsData.sports.push(req.body);

            fs.writeFileSync("news.json", JSON.stringify(newsData),"utf-8");
            console.log("Data written to file successfully");

            res.send("News created")
        } catch {
    
console.log("Error writing to file ", err);
res.status(500). send("something went wrong")
        }
    } else {
        res.status(400).send("Id alraedy exists")
    }

})


app.post("/message", (req,res)=> {
    console.log(req.body);
    res.send("from message")
})


app.listen(5000, () =>{
    console.log("Serverr running on port 5000");
})

