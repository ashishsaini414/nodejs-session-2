const http = require('http')
const data = require('./dummydata')
const port = process.env.PORT || 5000
const server = http.createServer((req, res)=>{
    if(req.url === "/getstudents" && req.method === "GET" ){
        res.getHeader("Content-Type","application/json")
        res.statusCode = 200;
        res.end(JSON.stringify(data))
    }
})
server.listen(port, ()=>{
    console.log("server is running at port number - "+ port)
})