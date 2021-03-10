const UserModel = require("./userModel");

const createUser = async (name, res) => {
  const user = new UserModel({ name });
  user
    .save()
    .then(() => res.send("User Created"))
    .catch((err) => res.send("something went wrong"));
};

module.exports = createUser;
