const express = require("express");
const Book = require("../models/Book");

const route = express.Router();

route.get("/all", async (req, res) => {
  const result = await Book.getAll();
  console.log(result);
  res.json(result);
});

route.get("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  const result = await Book.getBookById(bookId);
  res.json(result);
});

route.post("/new", async (req, res) => {
  const newBook = req.body;
  const result = await Book.add({ ...newBook });
  res.json(result);
});

route.put("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  const change = req.body;
  const result = await Book.update(change, `id = ${bookId}`);
  res.json(result);
});

route.delete("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  const result = await Book.remove(`id = ${bookId}`);
  res.json(result);
});

module.exports = route;
