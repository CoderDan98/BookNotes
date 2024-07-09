const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get("/books/data", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM books ORDER BY created_date DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/books/add", async (req, res) => {
  const {
    title,
    isbn,
    author,
    releaseDate,
    publisher,
    pageCount,
    description,
    notes,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO books (isbn_id, title, description, notes, release_date, author, page_count, publisher, created_date)
       VALUES($2, $1, $7, $8, $4, $3, $6, $5, CURRENT_TIMESTAMP)`,
      [
        title,
        isbn,
        author,
        releaseDate,
        publisher,
        pageCount,
        description,
        notes,
      ]
    );

    if (result.rowCount > 0) {
      res.status(200).json({ message: "Book added successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

app.put("/books/update/:id", async (req, res) => {
  const { id } = req.params;
  const {
    title,
    isbn,
    author,
    releaseDate,
    publisher,
    pageCount,
    description,
    notes,
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE books SET 
        title = $1,
        isbn_id = $2,
        author = $3,
        release_date = $4,
        publisher = $5,
        page_count = $6,
        description = $7,
        notes = $8
       WHERE book_id = $9`,
      [
        title,
        isbn,
        author,
        releaseDate,
        publisher,
        pageCount,
        description,
        notes,
        id,
      ]
    );

    if (result.rowCount > 0) {
      res.status(200).json({ message: "Book updated successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/books/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM books WHERE book_id = $1", [
      id,
    ]);
    if (result.rowCount > 0) {
      res.status(200).json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
