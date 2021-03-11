const UserModel = require("./userModel");

const updateUser = (name, findName, res) => {
  //   const user = new UserModel({ name: "newUser" });
  // update user with creating
  //   user.set("name", "alex");
  //   user
  //     .save()
  //     .then(() => {
  //       res.send("User Create and Updated");
  //     })
  //     .catch((err) => {
  //       res.send("Something Went Wrong");
  //     });
  //  <<<<<===============>>>>>>
  // Update one only with same value
  // UserModel.updateOne({ name: findName }, { name })
  //   .then(() => res.send("User Update"))
  //   .catch((err) => res.send("Something Went Wrong"));
  //  <<<<<===============>>>>>>
  // Update all with the same value
  // UserModel.updateMany({ name: findName }, { name })
  //   .then(() => res.send("Users Update"))
  //   .catch((err) => res.send("Something Went Wrong"));
  //  <<<<<===============>>>>>>
  // Update one only with same value
  UserModel.findOneAndUpdate({ name: findName }, { name }) // can match with any field But Update only Scema fields
    .then(() => res.send("User Update A"))
    .catch((err) => res.send("Something Went Wrong"));
};

const updateUserID = (name, id, res) => {
  // find a record with an Id and update
  UserModel.findByIdAndUpdate(id, { name })
    .then(() => res.send("User Update By ID"))
    .catch((err) => res.send("Something Went Wrong"));
};

module.exports = { updateUser, updateUserID };
