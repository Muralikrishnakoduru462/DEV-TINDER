const express = require("express");

const app = express();

app.use("/user", [
  (req, res, next) => {
    console.log("User route is called");
    // res.send("Hello World");
    next();
  },
  (req, res, next) => {
    console.log("User route is called2");
    // res.send("Hello World2");
    next();
  },
  (req, res, next) => {
    console.log("User route is called3");
    // res.send("Hello World3");
    next();
  },
  (req, res, next) => {
    console.log("User route is called4");
    res.send("Hello World4");
    // next();
  },
]);

app.listen(7777, () => {
  console.log("Server is successfully running");
});
