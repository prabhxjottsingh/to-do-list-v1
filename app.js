const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
var PORT = 3000 || process.env.PORT;

console.log(date.getDate());

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

app.get("/", function(req, res){
  let dayToday = date.getDate();
  res.render("list", {listTitle: dayToday, newListItem: items});

});

app.post("/", function(req, res){
  item = req.body.newItem;
  // console.lo
  if( req.body.list === "Work" ){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }

  // console.log(req.body);

});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItem: workItems})
});

app.post("/work", function(req, res){
  console.log(req.body);
  item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function(req, res){
  console.log("Hello");
  res.render("about");
});

app.listen(PORT, function(req, res){
  console.log(`The code is running on ${PORT}`);
});
