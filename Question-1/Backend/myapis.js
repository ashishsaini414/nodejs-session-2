const fs = require("fs");
const http = require("http");
const bodyParser = require("body-parser");
const data = require("./dummy");
const dummyData = require("./dummy");
const port = process.env.PORT || 4000;

bodyParser.urlencoded({ extended: true });

const server = http.createServer((req, res) => {
if(req.method === "POST"){
  res.writeHead(200, { "Content-Type": "application/json" });
  req.on("data", (chunk) => {
    const myreg = new RegExp(`^${JSON.parse(chunk)}`);
    const resultdata = dummyData.filter((obj) => myreg.test(`${obj.FirstName}`));
    res.end(JSON.stringify(resultdata))
  });
}else if(req.method === "GET"){
  res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(dummyData))
}
});
server.listen(port, () => {
  console.log("server is istening this port -", +port);
});
