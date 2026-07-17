const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    res.send("Welcome to Career-Connect");
});

app.get("/job", (req, res) =>{
    res.json([
        {
            id: 1,
            title: "Software Developer",
            company: "Google",
            location: "Banglore"
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "Microsoft",
            location: "Hyderabad"
        }
    ]);
});

app.get("/companies", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Google",
            location: "Banglore"
        },
        {
            id: 2,
            name: "Microsoft",
            location: "Hyderabad"
        }
    ]);
});

app.listen(5000, () =>{
    console.log("Server is running on port 5000");
});