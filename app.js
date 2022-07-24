const express = require("express");


const app = express();

app.get("/", (req,res) => {
    res.send("IndeX sayfası")
})
const port = 3000;

app.listen(port, () => {
    console.log(`App started on Port ${port}`)
})