const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:sviHkLP8Plkse6E1@namastenode.enqaszj.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
