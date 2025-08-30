const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  throw new Error("User not found");
  res.send("Welcome to Home Page");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});

app.listen(7777, () => {
  console.log("Server is successfully running");
});
