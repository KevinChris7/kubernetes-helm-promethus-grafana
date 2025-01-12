const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database setup
const db = new sqlite3.Database(":memory:");

db.serialize(() => {
    db.run("CREATE TABLE tasks (id INTEGER PRIMARY KEY, task TEXT)");
});

// Routes
app.get("/tasks", (req, res) => {
    db.all("SELECT * FROM tasks", [], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.json(rows);
    });
});

app.post("/tasks", (req, res) => {
    const { task } = req.body;
    db.run("INSERT INTO tasks (task) VALUES (?)", [task], function (err) {
        if (err) return res.status(500).send(err.message);
        res.json({ id: this.lastID, task });
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
