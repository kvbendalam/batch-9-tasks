const express = require('express')

const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

const courses = [
    {
        id: 1,
        name: "Fullstack",
        price: "12000",
        author: "Krishna"
    },
    {
        id: 2,
        name: "Frontend",
        price: "15000",
        author: "Krishna"
    },
    {
        id: 3,
        name: "Backend",
        price: "12000",
        author: "Vamsi"
    },
    {
        id: 4,
        name: "Mobile applications",
        price: "14000",
        author: "Vamsi"
    }
]


app.post("/course", verifyToken, (req, res) => {
    const auth = req.body.author;
    res.json(courses.filter(c => c.author === auth))
})


function verifyToken(req, res, next) {
    const secret = "adkjflke3343"

    const token = req.headers["authorization"]


    jwt.verify(token, secret, (err, payload) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.payload = payload
        next()
    })
}

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const secret = "adkjflke3343"
    const payload = { data: username }
    const token = jwt.sign(payload, secret)
    res.json({ token: token })

})

app.listen(3000, () => {
    console.log("Server is running...")
})