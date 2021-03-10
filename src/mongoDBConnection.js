const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: "../.env" });

// modules
const getUser = require("./readUser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

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

app.get("/users", async (req, res) => {
  const users = await getUser();
  res.json(users);
});

app.listen(3000);
