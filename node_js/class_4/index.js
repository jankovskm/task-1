// fs filesystem module
const fs = require("fs");
const { resolve } = require("path");

//example for writing in DB
// fs.writeFile("names.txt", "ABCD ABCD ABCD", (err) => {
//    if(err){
//     console.log("ERROR: ", err);
//    } 
// });

// let promiseExample = new Promise(function(resolve, reject){
//    // executor - code that prodices something, "the artist"  
// });

//resolve -> value
//reject -> error
//the result of the Promise has interni svojstva
//1. state (pending, fulfilled (calls resolve), rejected(calls reject))
//2. result (undefined, value(calls resolve), error(calls reject))

// let promise = new Promise(function(resolve, reject){
//     //se izvrshuva avtomatski
//     console.log('starting');
//     //setTimeout(() => resolve("done"), 3000);
//     setTimeout(() => { 
//     reject(new Error("GRESHKA!")); console.log('err')}, 3000);
// });

// console.log('after');

// 3 methodi na Promise
// .then()
// .catch()
// .finally()

// let p = new Promise((resolve, reject)=>{
//     //setTimeout(() => resolve("done"), 3000);
//     setTimeout(() => reject(new Error('ERR')), 3000);
// })

// //resolve & reject
// p.then(
//     function(result) {console.log("OK");},  //what runs on resolve
//     function(error) {console.log("NOK")}    //what runs on reject , always will run one of the two, this second one is not mandatory
// );

// //reject
// p.then(null, ()=>{}); // poshto fali prvata func ova e za reject
// p.catch(
//     err => {console.log("error");}
// );

// //finally
// // what runs anyways, regardless of result or error
// p.finally();

//real example for Promise
const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err)=>{
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

// fileWrite("ocenki.txt", "2,3,4,5,4,6,9,4")
// .then(() => { // then == success
//     console.log("success 1");
//     return fileWrite("boi.txt", "red, green");
// }).then(()=> {
//     console.log("success 2");
//     return fileWrite("boi2.txt", "red, green");
// }).then(() => {
//     console.log("success 3");
// }).catch(err => {
//     console.log(err);
// });

// // async/await //async before the function means that func always will return a Promise
// async function f(){
//     return 1;
// }

// f().then(console.log("async f()"));

// async function ff(){
//     let promise = new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("Rezult from async ss");
//         },1000)
//     });

//     let result = await promise;
//     console.log(11111);
//     console.log(result);
// }

// ff();
// console.log('AFTER FUNC');

const fileRead = (filename) => {
    return new Promise((success, fail)=>{
        fs.readFile(filename, "utf8", (err, data)=>{
            if(err){
                return fail(err);
            }
            return success(data);
        })
    })
}

(async ()=>{
    try{
        let boi = await fileRead("boi.txt");
        console.log("boi: ", boi);
    }catch(err){
        console.log(err);
    }
})(); //immediate execution function anonimni funkcii, mozat da bidat i async

let imenik = [
    {ime: "Goce", tel:"123"},
    {ime: "Pero", tel:"456"},
    {ime: "Dare", tel:"789"},
];

(async ()=>{
    try {
        let nameBase = JSON.stringify(imenik);
        console.log(nameBase);
        await fileWrite("imenik.txt", nameBase); 
        let dataString = await fileRead("imenik.txt");
        let data = JSON.parse(dataString);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})();