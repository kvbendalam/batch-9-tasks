const http = require('http')


const server = http.createServer(handleCourse)


function handleCourse(req, res) {
    res.writeHead(200, { 'content-Type': "text/html" })
    res.end('<h1>Hello world</h1>')
}


server.listen(3000, () => {
    console.log("Server is running!")
})