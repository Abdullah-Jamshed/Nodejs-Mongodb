const UserModel = require("./userModel");

const deleteUser = (name, res) => {
  // //   class method remove all with same value
  // UserModel.remove({ name })
  //   .then(() => res.send("User Deleted"))
  //   .catch((err) => res.send("Something Went Wrong"));

  // class method FindAndRemove
  UserModel.findOneAndRemove({ name })
    .then(() => res.send("User Deleted"))
    .catch((err) => res.send("Something Went Wrong"));
};

const deleteUserID = (id, res) => {
  // class method FindByIdAndRemove
  UserModel.findByIdAndRemove(id)
    .then(() => res.send("User Deleted"))
    .catch((err) => res.send("Something Went Wrong"));
};

module.exports = { deleteUser, deleteUserID };
