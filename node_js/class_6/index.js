//ova treba da e chas 7, eden propushtiv
const http = require("http");
const fs = require("fs");
const url = require("url");

const fileRead = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, "utf-8", (err, data)=>{
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

const render = async (page, data) => {
    let content = await fileRead(`./${page}.html`);
    return content.replace("{{res}}", data);
};

//setting routes
const pages = {
    "/": async (req, res) => {
        let content = await fileRead("./index.html");
        // content.replace("{{res}}", "test data");
        res.end(content.replace("{{res}}", 'start'));
    },
    "/doma": async (req, res) => {
        res.end("DOMA");
    },
  "/sobiranje": async (req, res) => {
    let result = `${Number(req.query.a) + Number(req.query.b)}`;
    res.end(await render("index", result));
  },
  "/odzemanje": async (req, res) => {
    let result = `${Number(req.query.a) - Number(req.query.b)}`;
    res.end(result);
  },
  "/mnozenje": async (req, res) => {
    let result = `${Number(req.query.a) * Number(req.query.b)}`;
  },
  "/delenje": async (req, res) => {},
};

const server = http.createServer((req, res) => {
  let [path, _] = req.url.split("?"); //destructuring assignement
  //same as let path = req.url.split("?")[0];
  //console.log("URL : "+ req.url);
  if (pages[path]) {
    const qs = url.parse(req.url, true).query;
    console.log(123);
    console.log(qs);
    req.query = qs;
    pages[path](req, res);
  } else {
    console.log("Err");
    res.end("Invalid operand");
  }
});

server.listen(8081);
