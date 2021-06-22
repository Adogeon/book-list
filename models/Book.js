const connection = require("./connect.js");
const { objToSql } = require("./utils.js");

module.exports = {
  add: async (title, summary, authorId) => {
    let query = `INSERT INTO books `;
    query += `(title, summary, authorId, score, numberOfVote)`;
    query += `VALUES(?,?,?,?,?)`;
    return await connection.execute(query, [title, summary, authorId, 0, 0]);
  },
  remove: async (condition) => {
    let query = `REMOVE from books where` + condition;
    return await connection.execute(query);
  },
  update: async (update, condition) => {
    let query = `UPDATE books`;
    query += `SET ${objToSql(update)}`;
    query += `WHERE ${condition}`;

    return await connection.execute(query);
  },
  getAll: async () => {
    let query = `SELECT * from books`;
    return await connection.execute(query);
  },
  getBookById: async (bookId) => {
    let query = `SELECT * from books WHERE id = ?`;
    return await connection.execute(query, [bookId]);
  },
};
