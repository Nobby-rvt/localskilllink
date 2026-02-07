const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let skills = [];

app.get("/skills", (req, res) => {
    res.json(skills);
});

app.post("/skills", (req, res) => {
    const { name, skill } = req.body;
    skills.push({ name, skill });
    res.send("Skill added");
});

app.listen(5000, () => console.log("Server running on port 5000"));
