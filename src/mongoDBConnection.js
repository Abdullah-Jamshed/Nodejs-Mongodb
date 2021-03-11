const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: "../.env" });

// modules
const createUser = require("./createUser");
const { getUser, getUsers, getUserID } = require("./readUser");
const { updateUser, updateUserID } = require("./updateUser");
const { deleteUser, deleteUserID } = require("./deleteUser");

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

// <<<<==== CRUD OPERATIONS ====>>>>

// <<<<==== Create ====>>>>
app.post("/createUser", async (req, res) => {
  const name = req.body.name;
  if (name) return createUser(name, res);
  res.send("SomeThing Went Wrong");
});

// <<<<==== READ ====>>>>
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

app.get("/userID/:id", async (req, res) => {
  const id = req.params.id;
  if (id) {
    const user = await getUserID(id); // seleted user by id
    if (user) return res.json(user);
    res.send("Some Thing Went Wrong");
  }
  res.send("Some Thing Went Wrong");
});

// <<<<==== UPDATE ====>>>>
app.put("/updateUser/:name", (req, res) => {
  const findName = req.params.name;
  const name = req.body.name;
  if (name) return updateUser(name, findName, res);
  res.send("SomeThing Went Wrong");
});

app.put("/updateUserID/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  if (name) return updateUserID(name, id, res);
  res.send("SomeThing Went Wrong");
});

// <<<<==== DELETE ====>>>>

app.delete("/deleteUser", (req, res) => {
  const { name } = req.body;
  if (name) return deleteUser(name, res);
  res.send("SomeThing Went Wrong");
});

app.delete("/deleteUserID/:id", (req, res) => {
  const { id } = req.params;
  if (id) return deleteUserID(id, res);
  res.send("SomeThing Went Wrong");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 ERROR PAGE NOT FOUND</h1>");
});

app.listen(app.get("port"), function () {
  console.log(`Express Started on: http://localhost:${app.get("port")}`);
});
