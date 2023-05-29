const mongoose = require("mongoose");

const connectionStr = "mongodb://127.0.0.1:27017/students";

//connect to the DB
// const connect = (uri) => {
//     return new Promise((success, fail) => {
//         mongoose.connect(uri, err => {
//             console.log("We connected to the DB!");
//             return success;
//         })
//     })
// }

//connect to the DB
const connectDB = async (connectionStr) => {
    try {
        const conn = await mongoose.connect(connectionStr);

        console.log("We connected to the DB!");
    } catch (error) {
        console.log(error);
    }
}

connectDB(connectionStr);

const Student = mongoose.model(
    "students",
    {
        name: String,
        surname: String,
        age: Number
    },
    "students"
);

const insert = async (newStudent) => {
    const student = new Student();
    student.name = newStudent.name;
    student.surname = newStudent.surname;
    student.age = newStudent.age;
    try {
        const save = await student.save();
        console.log(save);
    } catch (error) {
        console.log(error);
    }
}

const studentsToAdd = [
    {
        name:'Mil',
        surname:'Jan',
        age:10
    },
    {
        name:'Mil',
        surname:'Jan',
        age:10
    },
    {
        name:'Mat',
        surname:'Jan',
        age:5
    },
    {
        ime:'Jazz',
        surname:'Jan',
        age:3
    }
];

studentsToAdd.forEach(element => {
    insert(element);
});





