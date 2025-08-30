const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("//// for universal");
});

app.use("/hello", (req, res) => {
  res.send("hello hello hello");
});

app.use("/test", (req, res) => {
  res.send("test test test");
});

app.listen(7777, () => {
  console.log("Server is successfully running");
});
