const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

const app = express();

const { USER_ID, USER_PASSWORD } = process.env;

mongoose.connect(`mongodb+srv://${USER_ID}:${USER_PASSWORD}@cluster0.ekurl.mongodb.net/database?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
});

mongoose.connection
  .once("open", () => {
    console.log("<<<<<======== Connection is Established....========>>>>>>>>");
  })
  .on("error", (err) => {
    console.log("Err: ", err);
  });

app.listen(3000);
