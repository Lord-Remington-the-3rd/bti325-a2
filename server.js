/*********************************************************************************
* BTI325 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Valy Osman 
* Student ID: 184017218 
* Date: 10/09/2022
*
* Online (Cyclic) URL:
*
********************************************************************************/ 


var express = require("express");
var app = express();
var path = require("path");
var data = require("./data-service");
app.use(express.static('public'));

const HTTP_PORT = 8080;

let onHttpStart = () => {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/home.html")); 
});

app.get("/about", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/employees", (req,res) => {
  data.getAllEmployees()
  .then((data) => { 
    res.json(data) 
  })
  .catch((err) => { 
    res.json({message: err}) 
  });
});

app.get("/departments", (req,res) => {
  data.getDepartments()
  .then((data) => { 
    res.json(data) 
  })
  .catch((err) => { 
    res.json({message: err}) 
  });
});

app.get("/managers", (req,res) => {
  data.getManagers()
  .then((data) => { 
    res.json(data) 
  })
  .catch((err) => { 
    res.json({message: err}) 
  });
});

app.get("*", (req,res) => {
  res.send("Error 404: Page not found.");
});

data.initialize()
.then(() => {
  app.listen(HTTP_PORT, onHttpStart)
})

.catch((reason) => {
  console.log(reason);
});