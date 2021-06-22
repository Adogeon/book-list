const { urlencoded } = require("express");
const express = require("express");

const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("/public"));

app.listen(3000, () => {
  console.log("Server runinng at 3000");
});
