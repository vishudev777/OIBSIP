const express = require("express");

const app = express();

const db = require("./db.js");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("vicky 🔥");
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
