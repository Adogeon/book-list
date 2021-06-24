const connection = require("./connect.js");
const { objToSql } = require("./utils.js");

module.exports = {
  add: async (title, summary, authorId) => {
    let query = `INSERT INTO books `;
    query += `(title, summary, authorId, score, numberOfVote)`;
    query += `VALUES(?,?,?,?,?)`;
    const [rows] = await connection.execute(query, [
      title,
      summary,
      authorId,
      0,
      0,
    ]);
    return rows;
  },
  remove: async (condition) => {
    let query = `REMOVE from books where` + condition;
    const [rows] = await connection.execute(query);
    return rows;
  },
  update: async (update, condition) => {
    let query = `UPDATE books`;
    query += `SET ${objToSql(update)}`;
    query += `WHERE ${condition}`;
    const [rows] = await connection.execute(query);
    return rows;
  },
  getAll: async () => {
    let query = `SELECT * from books`;
    const [rows] = await connection.execute(query);
    return rows;
  },
  getBookById: async (bookId) => {
    let query = `SELECT * from books WHERE id = ?`;
    const [rows] = await connection.execute(query, [bookId]);
    return rows;
  },
};
