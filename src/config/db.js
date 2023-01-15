// imports external
const mongoose = require("mongoose");
require('dotenv').config();

let dbUrl = "";

if (process.env.NODE_ENV === "production") {
  dbUrl = process.env.MONGODB_URI;
};
if (process.env.NODE_ENV === "test") {
  dbUrl = process.env.MONGODB_TEST_URI;   
};
if (process.env.NODE_ENV === "development") {
  dbUrl = process.env.MONGODB_DEV_URI;
};
if (!dbUrl) {
  console.log("Mongo url not set in env file");
  new Error("Mongo url not set in env file");
};

// mongoose
mongoose.connect(
  dbUrl, 
  (error) => {
    if (error) {
      console.log(`FAILED to connect using mongoose. ${error}`);
    } else {
      console.log(`Connected to DB server. ( ${process.env.NODE_ENV} )`);
    }
  }
);