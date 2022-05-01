const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const posts = require(__dirname + "/posts")


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
  res.render("home", {posts: posts});
});

app.get("/compose", function(req,res){
  res.render("compose");
});

app.post("/compose",function(req,res){
  const post = {
    id: posts.length + 1,
    name: req.body.postName,
    content: req.body.postContent
  }

  posts.push(post);

  res.redirect("/");

});

app.get("/posts/:id", function(req, res){
  const id = parseInt(req.params.id, 10);
  posts.forEach(function(post){
    const storedId = post.id;
    if(storedId === id){
      res.render("post", {post: post})
    }
  });
});

app.listen(3000, function(){
  console.log("app running at port 3000");
});
