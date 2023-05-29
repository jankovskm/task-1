//express
const express = require("express");

const app = express();

//set ejs
app.set("view engine", "ejs");

//GET
app.get("/", (req, res)=>{ //toa (req,res) se vika handler (controlleri)
    res.render("index"); //  views/index.ejs
});

app.get("/podatoci/:ime", (req, res) => {
    let data = {
        ime: req.params.ime,
        studenti: [
            {first_name: "Milena", last_name: "Jan"},
            {first_name: "Angelo", last_name: "Pas"},
            {first_name: "Jazz", last_name: "Jan"},
            {first_name: "Tea", last_name: "Pas"},
            {first_name: "Nelo", last_name: "Pas"},
            {first_name: "Tapan", last_name: "Jan"}
        ]
    }
    res.render("podatoci", data); // views/podatoci.ejs
})

//GET /formular
app.get("/formular", (req, res) => {
    res.render("form");
})

app.use(express.urlencoded({extends:true})); //so json zaedno se koristat vo post i put

//POST /formular-rezultat
app.post("/formular-rezultat", (req, res) => {
    let data = {
        ime: req.body.ime,
        prezime: req.body.prezime
    }
    res.render("formular-rezultat", data); //za da ispratish forma pak ti treba nekoja middleware funkcija, kako taa use json
})

// inicijativa
app.listen(8080, err => {
   if(err) return console.log(err);
   console.log("server is listening"); 
});