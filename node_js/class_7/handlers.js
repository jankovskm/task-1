const home = (req, res) => {
    res.send("zdravo od home!");
};

const calculator = (req, res) => {
    console.log("REQ OPERATION " + req.params.operation); // tuka e operation promenlivata
    console.log("REQ QUERY " + JSON.stringify(req.query)); // tuka e query object
//JSON.stringify za da parseneme object obect vo json
    console.log("REQ middleware " + JSON.stringify(req.body)); // tuka e middleware


switch (req.params.operation) {
    case "sobiranje":
        result = Number(req.query.a) + Number(req.query.b);
        break;
        case "odzemanje":
            result = Number(req.query.a) - Number(req.query.b);
        break;
        case "mnozenje":
        result = Number(req.query.a) * Number(req.query.b);
        break;    
    default:
        result = 0;
        break;
}
    res.send(result.toString());
}

const calculator2 = (req, res) => {
    console.log("REQ OPERATION " + req.params.operation); // tuka e operation promenlivata
    console.log("REQ QUERY " + JSON.stringify(req.query)); // tuka e query object
//JSON.stringify za da parseneme object obect vo json

switch (req.params.operation) {
    case "sobiranje":
        result = Number(req.query.a) + Number(req.query.b);
        break;
        case "odzemanje":
            result = Number(req.query.a) - Number(req.query.b);
        break;
        case "mnozenje":
        result = Number(req.query.a) * Number(req.query.b);
        break;    
    default:
        result = 0;
        break;
}
    res.send(result.toString());
}

module.exports = {
    home,
    calculator,
    calculator2
}