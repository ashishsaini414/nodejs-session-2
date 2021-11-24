const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 4001;
const server = http.createServer((request, response)=>{
    if(request.url === "/"){
        response.statusCode = 200;
        response.getHeader("ContentType", "text/html")
        const data = fs.readFileSync("index.html")
        response.end(data.toString())
    }
    else if(request.url == '/about'){
        response.statusCode = 200;
        response.getHeader("ContentType", "text/html")
        const data = fs.readFileSync("index1.html")
        response.end(data.toString())
    }
    else if(request.url == '/contact'){
        response.statusCode = 200;
        response.getHeader("ContentType", "text/html")
        const data = fs.readFileSync("index2.html")
        response.end(data.toString())
    }
    else{
        response.getHeader("text/html")
        response.statusCode = 404;
        response.end("<h1>NOT FOUND</h1>")
    }
})

server.listen(port,()=>{
    console.log("server is listening",+port)
})












// //GET REQUEST
// const options = {
//   hostname: 'example.com',
//   port: 443,
//   path: '/todos',
//   method: 'GET'
// }
// const client = https.request(options, (res)=>{
//     console.log(res)
// })

