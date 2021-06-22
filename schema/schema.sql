DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;
USE books_db;

CREATE TABLE books(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  authorId INTEGER(11),
  title VARCHAR(100),
  summary VARCHAR(255),
  score INTEGER(2),
  numberOfVote INTEGER(10),
  PRIMARY KEY (id)
);

CREATE TABLE bookcomments(
  bookId INTEGER(11),
  commentId INTEGER(11),
  UNIQUE KEY (bookId, commentId)
)

CREATE TABLE comments(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  writerId INTEGER(11),
  content VARCHAR(255),
  PRIMARY KEY (id)
)

CREATE TABLE authors(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE readers(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  wordRead INTEGER(20),
  PRIMARY KEY (id)
)

CREATE TABLE readbooks(
  readerId INTEGER(11),
  bookId INTEGER(11),
  finished BOOLEAN,
  UNIQUE KEY (readerId, bookId)
)