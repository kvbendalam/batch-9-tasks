const http = require('http')


const server = http.createServer(handleCourse)

const course = [{
    id: 1,
    name: "Full stack development",
    duration: "3 months",
    timings: "9-10pm",
    price: "30000"
},
{
    id: 2,
    name: "Full stack development",
    duration: "3 months",
    timings: "9-10pm",
    price: "30000"
},
{
    id: 3,
    name: "Full stack development",
    duration: "3 months",
    timings: "9-10pm",
    price: "30000"
},
{
    id: 4,
    name: "Full stack development",
    duration: "3 months",
    timings: "9-10pm",
    price: "30000"
}]

function handleCourse(req, res) {
    res.writeHead(200, { 'content-Type': "application/json" })
    res.end(JSON.stringify(course))
}


server.listen(3000, () => {
    console.log("Server is running!")
})