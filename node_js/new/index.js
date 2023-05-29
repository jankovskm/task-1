const http = require("http");
const url = require("url");
const fs = require("fs");
//const path = require("path");

const getPage = (pageName) => {
  return new Promise((success, error) => {
    fs.readFile(pageName, "utf-8", (err, data)=>{
      if(err){
        return error(err);
      }
      
      return success(data);
    });
  });
}



const routes = {
  // 'home':
}

const server = http.createServer((req, res,)=>{
  let [path, smth] = req.url.split("?");
  //let pathModule = path.basename(req.url);
  console.log()

  res.end('abc');
})

server.listen(8080);