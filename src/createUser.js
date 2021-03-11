const UserModel = require("./userModel");

const createUser = (name, res) => {
  const user = new UserModel({ name });
  user
    .save()
    .then(() => res.send("User Created"))
    .catch((err) => res.send("something went wrong A"));
};

module.exports = createUser;
