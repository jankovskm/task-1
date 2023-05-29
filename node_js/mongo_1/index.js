//*start mongo server
// mongod --dbpath="c:\data\db"

//*then in another cmd start mongo shell
//mongosh

//*list dbs preku mongosh
//show dbs

//* listanje kolekcii (tables) preku mongosh ama treba prvo da odberesh nekoja baza preku use
// show collections

//odberi baza
//use newbase

//listanje na docs vo kolekcija preku mongsh
//db.imeNaKolekcija.find()

//kreiranje na db/kolekcija/dokument
//db.imeNaKolekcija.insertOne({a:1,b:2})
//db.imeNaKolekcija.insertMany([{f:12,g:17},{h:1,k:8},{}])

//azuriranje na dokumenti
//db.imeNaKolekcija.updateOne({_id:Object("63d817a32b521809dc97db61")}, {$set:{ c:7}})
//db.imeNaKolekcija.updateMany({a:1}, {$set:{ a:7}})
//db.imeNaKolekcija.replaceOne({_id: ObjectId("63d818ec2b521809dc97db65")}, {replaced:true})

//brishe
//db.imeNaKolekcija.deleteOne({ f:7 });
//db.imeNaKolekcija.deleteMany({ f:7 });

//mongoose
//npm install mongoose
const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/studenti";

//connecting to db
const connect = (connectionString) => {
    return new Promise((success, fail) => {
        mongoose.connect(connectionString, err => {
            console.log("Connection to MongoDB OK!");
            return success();
        });
    });
}

const Studenti = mongoose.model(
    "studenti", //model
    {
        ime: String,
        prezime: String,
        prosek: Number
    },
    "studenti" //collection
);

connect(connectionString)
.then(()=>{
    return Studenti.find({});
})
.then(res => {
    console.log(res);
    let s = new Studenti({
        ime:'Mil',
        prezime:'Jan',
        prosek:10
    });
    return s.save();
})
.then(res => {
    console.log("SAVED!", res);
    return Studenti.updateOne({_id: "63d82d8850c5913e79d18320"}, {prezime: "JanJan"});
})
.then(res => {
    console.log("UPDATED");
    return Studenti.deleteOne({_id: "63d82948ca0c844bebda0862"});
})
.then(res => {
    console.log('DELETEd');
    return Studenti.find({ime:"Mil"}, {prezime: 1}); //if prezime: 0 togash vrakja se osven prezime
})
.then(res => {
    console.log('FILTERED DATA:', res);
    return Studenti.find({prosek: {"$gte":9}}, {prezime: 1, ime: 1}).sort({prezime: 1});
}).then(res => {
    console.log('FILTERED DATA 2 :', res);
})
.catch(err => {
    console.log(err);
})