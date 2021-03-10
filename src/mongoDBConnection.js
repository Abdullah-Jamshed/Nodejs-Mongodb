const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: "../.env" });

// modules
const { getUser, getUsers } = require("./readUser");
const createUser = require("./createUser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3000);

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
  const users = await getUsers(); // all users
  res.json(users);
});

app.get("/user/:name", async (req, res) => {
  const name = req.params.name;
  if (name) {
    const user = await getUser(name); // seleted user
    res.json(user);
    return;
  }
  res.send("Some Thing Went Wrong");
});

app.post("/createUser", async (req, res) => {
  const name = req.body.name;
  if (name) {
    createUser(name, res);
  }
  res.send("SomeThing Went Wrong");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 ERROR PAGE NOT FOUND</h1>");
});

app.listen(app.get("port"), function () {
  console.log(`Express Started on: http://localhost:${app.get("port")}`);
});
