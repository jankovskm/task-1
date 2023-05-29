//treba da e chas 8
//EXPRESS framework
const express = require("express");
//console.log(aa);

const handlers = require("./handlers");

const app = express();


//gore se customElements, ovoj dole e express middleware
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Zdravo od get pochetna!");
});

app.post("/", (req, res) => {
    res.send("Zdravo od post pochetna!");
});

app.get("/home", handlers.home);

//parametar vo routatata : (ova e od express)
app.get("/calc/:operation", handlers.calculator);

app.post("/calc/:operation", handlers.calculator2);

//middleware (toa shto e between req i res)  so use se definira middleware, primer tuka moze validacija i verifikacija
app.use("/mid", (req, res, next) => {
    console.log('before mid');
    next();
});

// all reagira na se na post, get, put
app.all("/mid", (req, res, next)=> {
    res.send("/mid called");
    next();
});

app.use("/mid", (req, res, next) => {
    console.log('after mid');
    next();
});



app.listen(8080, (err)=>{
    if(err){
        return(console.log(err))
    }
    console.log("Server started succesfully");
})

