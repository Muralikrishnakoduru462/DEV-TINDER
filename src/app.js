const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "koduru",
    lastName: "murali",
    emailId: "murali@gmail.com",
    password: "murali@1999",
  };

  const user = new User(userObj);

  try {
    await user.save();
    res.send("User added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database conection established");
    app.listen(7777, () => {
      console.log("Server is successfully running");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
