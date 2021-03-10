const UserModel = require("./userModel");

const getUser = async () => {
  const data = await UserModel.find({});
//   console.log("data inside func ==>> ", data);
  return data;
};

module.exports = getUser;
