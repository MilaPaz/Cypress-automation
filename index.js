const express = require('express');
const app = new express();
const path = require("path")

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.post("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"))
})

app.post("/logout", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "logout.html"))
})