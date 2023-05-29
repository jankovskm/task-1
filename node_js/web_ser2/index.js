 const fs = require("fs");
// const http = require("http");

// // callback
// const myFunc = (name, callback) => {
//     console.log(name);
//     callback();
// }

// const callMe = () => {
//     console.log("callback func");
// }

// myFunc("Ime", callMe);

// // until here is the callback example


const readData = (src) => {
    return new Promise((success, fail) => {
        fs.readFile(`${src}.json`, "utf-8", (err, data) => {
            if(err) return fail(err);
            const out = JSON.parse(data);
            return success(out);
        })
    });
}

// const test = async () => {
//     try {
//     const res = await readData("./data");
//         console.log("res", res);
//     } catch (error) {
//         throw error;
//     }
// }

// test();

const writeData = (fileName, text) => {
    return new Promise((success, fail) => {
        const textt = JSON.stringify(text);
        fs.writeFile(`${fileName}.txt`, textt, (err) => {
            if(err) return fail(err);
            return success();
        })
    })
}

// const test1 = async () => {
//     try {
//     const res = await writeData("./test", "TEST1");
//         console.log("ready!");
//     } catch (error) {
//         throw error;
//     }
// }

// test1();

// http
// .createServer((req, res)=> {

//     if(req.url === "/test"){
//         res.write("Hello Test");
//         res.end();
//     }else{
//         res.write("Hello World");
//     }
// })
// .listen(10000);

//EXPRESS

const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

const api = express();

api.use(express.json());

api.get("/users", async(req, res) => {
    try {
        const data = await readData("./data");
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
})

api.get("/user/:id", async(req, res) => {
    try {
        var userId = req.params.id;
        console.log(userId);
        const users = await readData("./data");
        const user = users.filter(user => user.id == userId);
        if(user.length > 0) res.status(200).send(user);
        else throw Error("No user");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
})

const PORT = 10000;

api.listen(PORT, (err) => {
    if(err) return console.log("err");
    console.log(`Server started on port ${PORT}`);
});

const addPerson = async (id, first_name, last_name) => {
    try {
        const person = {
            id,
            first_name, // bidejkji e isto ime so param gore ne mora da stavame first_name=first_name
            last_name
        }
        let data = await readData('./data');
        console.log(person)
        data.push(person);
        await writeData('./data', data);
    } catch (err) {
        throw err;
    }
}

//OBJECT => JSON.stringify(obj)
//STRING => JSON.parse(string)

//IIFE function //se izvrshuva odma
(async () => {
    await addPerson(4, "TestName", "TestSurname");
    await removePerson(4)
})();

const removePerson = async (index) => {
    try {
    const users = await readData("./data");
    const newData = users.filter(user => user.id != index);
    await writeData('./data', newData);
    console.log('OK');
} catch (err) {
    throw err;
}
}