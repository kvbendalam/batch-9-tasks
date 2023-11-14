const express = require('express')

const app = express()


app.use(handleFirst)

// app.get("/sayHi", handleSayHi)

app.get("/sayHello", handleSayHi, handleSayHello)

function handleFirst(req, res) {
    console.log("This is common middleware")
}

function handleSayHi(req, res, next) {
    console.log("Hi");
    req.abc = "This is Hi Method"
    next()
}

function handleSayHello(req, res) {
    console.log(req.abc)
    res.send("Hello")
}

app.listen(3000, () => {
    console.log("Server is running...")
})