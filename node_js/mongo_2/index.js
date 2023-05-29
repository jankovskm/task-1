const express = require("express");
const mongoose = require("mongoose");
const pages = require("./handlers/pages");
const callback = require("./handlers/callbacks");

//ime na protokol e mongodb delot
const connectionStr = "mongodb://127.0.0.1:27017/bazablog";

mongoose.connect(connectionStr, err => {
    if(err) return console.log(err);
    console.log("Connected to DB!");
});

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.get("/", pages.main);
app.get("/blogpost/:id", pages.singleBlogpost);
app.get("/form", pages.formAdd);
//app.get("/form/:id", );

app.post("/callback/post", callback.create);
// app.post("/callback/post/:id", );
// app.post("/callback/remove/:id", );

app.listen(8080, err => {
    if(err) return console.log(err);
    console.log("Server successfully started on port 8080!");
});

