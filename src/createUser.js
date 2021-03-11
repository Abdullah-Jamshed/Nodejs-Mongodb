const UserModel = require("./userModel");

const createUser = (name, res) => {
  const user = new UserModel({ name });
  user.validateSync(); // SYNC
  user
    .save()
    .then(() => res.send("User Created"))
    .catch((validationResult) => {
      const { message } = validationResult.errors.name;
      res.send(message);
    });
};
module.exports = createUser;
