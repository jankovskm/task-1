const fs = require("fs");

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

module.exports = {readData, writeData}