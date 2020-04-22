const UserModel = require("./userModel");

const createUser = (name, res) => {
  // const user = new UserModel({ name });
  // user.validateSync(); // SYNC
  // user
  //   .save()
  //   .then(() => res.send("User Created"))
  //   .catch((validationResult) => {
  //     const { message } = validationResult.errors.name;
  //     res.send(message);
  //   });

  
  //// insertOne User
  const user = new UserModel({ name });
  UserModel.create(user) //// equivalent to insertOne
    .then(() => res.send("User Created"))
    .catch((validationResult) => {
      const { message } = validationResult.errors.name;
      res.send(message);
    });

  //// insertMany User
  // UserModel.insertMany([{ name: "akhtar" }, { name: "nadeem" }])
  //   .then(() => res.send("User Created"))
  //   .catch((validationResult) => {
  //     const { message } = validationResult.errors.name;
  //     res.send(message);
  //   });
};
module.exports = createUser;
