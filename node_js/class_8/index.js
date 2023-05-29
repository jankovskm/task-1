//treba da e chas 9
const express = require("express");

//hanlders
const handlers = require("./handlers");

const app = express();

//calls body in the request
app.use(express.json());

//routes/endpoints

// post studenti -> adds a student
app.post("/studenti", handlers.addStudent);

// get studenti -> returns students
app.get("/studenti", handlers.getAllSudents);

// get studenti/:id -> returns one student with an id
app.get("/studenti/:id", handlers.getStudentById);

// put studenti/:id -> updates student with id

// delete studenti/:id -> deletes student with an id

app.listen(8080, err => {
    if(err) return console.log(err);
    console.log("Server is running on port 8080!");
})