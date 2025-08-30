const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent Successfully");
});

app.delete("/admin/deleteUser", (req, res) => {
  res.send("Delete User Successfully");
});

app.listen(7777, () => {
  console.log("Server is successfully running");
});
