const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(express.json());

const pool = new Pool({
  password: "Harsh@1911",
});

(async () => {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS students (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      course VARCHAR(50)
    )`);
    console.log("Table created or already exists");
  } catch (err) {
    console.error("Error creating table:", err);
  }
})();

app.post("/students", async (req, res) => {
  const { name, course } = req.body;
  try {
    await pool.query("INSERT INTO students (name, course) VALUES ($1, $2)", [name, course]);
    console.log(`Inserted student: Name ${name}, Course ${course}`);
    res.json({ message: `Student Inserted: Name ${name}, Course ${course}` });
  } catch (err) {
    console.error("Error Inserting Student");
    res.status(500).json({ error: "Error inserting student" });
  }
});

app.get("/students", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM students");
    console.log("Fetched Data:", result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error("Error Fetching Data");
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
