const UserModel = require("./userModel");

const getUsers = async () => {
  const data = await UserModel.find({});
  //   console.log("data inside func ==>> ", data);
  return data;
};

const getUser = async (name) => {
  // finds all users with a name of joe
  // const data = await UserModel.find({ name });

  // finds user with a name of joe
  const data = await UserModel.findOne({ name });
  return data;
};

module.exports = { getUser, getUsers };
