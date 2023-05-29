const http = require("http");
const url = require("url");

const test = "Hello";

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    const query = url.parse(req.url, true).query;
    const text = query.year + " " + query.month;
    console.log(text);
    const num = calc(query.num1,query.num2);
    res.write(num);
    res.end();
}).listen(8080);

//server.listen(8080);

// calc 2 numbers and return result
function calc(a, b){
 console.log(1);
 return a + b;
}

const calc1 = () => {
    console.log(2);
}

const calc2 = function(){
    console.log(3);
}

calc(5,3);



