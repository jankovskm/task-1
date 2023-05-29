const util = require("./utils.js");

const DATA_SOURCE = "./data.txt";

const addStudent = async (req, res) => {
    try{
        // read the content of the file
        let dataRaw = await util.fileRead(DATA_SOURCE);
        // check if file exists
        let data = null;
        data = dataRaw.length > 0 ? JSON.parse(dataRaw) : []; // string to json object

        //adds new data to file
        data.push(req.body);

        await util.fileWrite(DATA_SOURCE, JSON.stringify(data)); // json obj to string
        res.send('OK');
    }catch(err){
        res.send(err);
    }

}

const getAllSudents = async (req, res) => {
    try{
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);
        
        if(data.length > 0){
            // send a reponse
            res.send(JSON.parse(data));
        }
        else{
            res.send('no students');
        }
    }catch(err){
        res.send(err);
    }
}

const getStudentById = async (req, res) => {
    try{
        //ako e so ? params ondak:  req.query.id
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);

        if(data[req.params.id]){
            res.send(data[req.params.id]);
        }else{
            res.send("no such student");
        }
    }catch(err){
        res.send("no such student");
    }
}

module.exports = {
    addStudent,
    getAllSudents,
    getStudentById
}