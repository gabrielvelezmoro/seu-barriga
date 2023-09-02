const express = require("express");
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.json())

app.get("/", (req,res) => {
    res.status(200).send()
})

app.get("/users", (req,res) => {
    const users = [{name: 'John Doe', email: 'mail@mail.com'}]
    res.json(users).status(200).send()
})

app.post("/users", (req,res) => {
    res.status(201).json(req.body)
})

module.exports = app
