const express = require("express");

const app = express();

app.use("/user", (req, res) => {
  res.send("use user");
});

app.get("/user", (re, res) => {
  res.send({ firstName: "murali", lastName: "krishna" });
});

app.post("/user", (re, res) => {
  res.send("post call user");
});

app.delete("/user", (re, res) => {
  res.send("post call user");
});

app.use("/test", (req, res) => {
  res.send("delete call");
});

app.listen(7777, () => {
  console.log("Server is successfully running");
});
