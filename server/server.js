const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "career_connect",
    port: 3307,
})

connection.connect((err) => {

    if (err) {
        console.log("Connection Failed :",err);
        return;
    }

    console.log("Connected to MySQL");
});
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Welcome to Career-Connect");
});

app.get("/jobs", (req, res) =>{
    connection.query("SELECT * FROM jobs",(err,results) => {
        if(err) {
            res.status(500).send("Database Error");
            return;
        }

        res.json(results);
    })
});

app.post("/jobs", (req, res) => {

   const { title, company, location } = req.body;

   connection.query(
    "INSERT INTO jobs (title, company, location) VALUES (?, ?, ?)",
    [title, company, location],
    (err, results) => {
        if(err) {
            res.status(500).send("Database Error");
        }

        res.send("Job Added Successfully");
    }
   )

});

app.put("/jobs/:id", (req, res) => {

    const id = req.params.id;

    const { title, company, location } = req.body;

    connection.query(
        "UPDATE jobs SET title = ?, company = ?, location = ? WHERE id = ?",
        [title, company, location, id],
        (err, results) => {

            if (err) {
                res.status(500).send("Database Error");
                return;
            }

            res.send("Job Updated Successfully");

        }
    );

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