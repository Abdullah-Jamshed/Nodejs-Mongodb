const UserModel = require("./userModel");

const getUsers = async () => {
  const data = await UserModel.find({});
  //   console.log("data inside func ==>> ", data);
  return data;
};

const getUser = async (name) => {
  // // <<<<====>>>>
  // // find first user only
  // const data = await UserModel.findOne();

  // // <<<<====>>>>
  // // finds all users with a name of joe
  // const data = await UserModel.find({ name });

  // // <<<<====>>>>
  /// // finds user with a name of joe
  const data = await UserModel.findOne({ name });

  return data;
};
const getUserID = async (id) => {
  // // finds user by id
  try {
    const data = await UserModel.findById(id);
    return data;
  } catch {
    return false;
  }
};

module.exports = { getUser, getUsers, getUserID };
