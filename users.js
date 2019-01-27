const express = require("express");
const morgan = require('morgan');
const users = express();

users.get("/", (req, res) => res.send("Hello World!"));

const PORT = 1337;

users.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});