const http = require('http')

const server = http.createServer(handleRequest)

function handleRequest(request, response) {
    response.writeHead(200, { 'content-Type': 'text/plain' })
    response.end("Welcome to Entri Elevate")
}

server.listen(3000, () => {
    console.log("Server is running on 3000!")
})