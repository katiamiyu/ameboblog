const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");




app.listen("3000", function(){
  console.log("app running at port 3000");
});
