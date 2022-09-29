//  import express
const express = require("express"); //import express from "express"
const app = express();
const port = 8000;

// configure express to allow post/put
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// temp data base
const users = [
    {firstName: "karsten", lastName: "wersland"},
    {firstName: "karsten", lastName: "wersland"},
    {firstName: "karsten", lastName: "wersland"},
    {firstName: "karsten", lastName: "wersland"},
    {firstName: "karsten", lastName: "wersland"}
]


// testing routes
app.get("/api/testing", (req, res) => {
    res.json({message: "Hello World"})
})

// get all
app.get("/api/users", (req, res) => {
    res.json(users)
})

// get one
app.get("/api/users/:id", (req, res) => {
    const userId = req.params.id
    res.json(users[userId])
})

// create
app.post("/api/users", (req, res) => {
    const newUser = req.body
    users.push(newUser)
    res.json(newUser)
})

// update -- getOne + create
app.put("/api/users/:id", (req, res) => {
    const userId = req.params.id
    const updatedData = req.body
    users[userId] = updatedData
    res.json(users[userId])
})

// delete
app.delete("/api/users/:id", (req, res) => {
    const userId = req.params.id
    users.splice(userId, 1)
    res.json({status: "ok"})
})


app.listen( port, () => console.log(`listening on port ${port}`))