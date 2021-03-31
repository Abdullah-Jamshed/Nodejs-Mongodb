const UserModel = require("./userModel");

const findUser = async () => {
  try {
    //   <<<<============>>>>
    // const data = await UserModel.find({ $and: [{ age: { $ne: 20 } }, { age: { $exists: true } }] });
    // This query will select all documents in the inventory collection where:
    // the age field value is not equal to 20 and
    // the age field exists.

    //   <<<<============>>>>
    // This query can be also be constructed with an implicit AND operation
    // by combining the operator expressions for the age field. For example, this query can be written as:
    // const data = await UserModel.find({ age: { $ne: 20, $exists: true } });

    //   <<<<============>>>>
    const data = await UserModel.find({
      $and: [{ $or: [{ age: 20 }, { age: 2 }] }, { $or: [{ name: "abdullah" }, { age: { $lt: 30 } }] }],
    });

    // This query will select all documents where: the age field value equals 20 or 2, and
    // the age field value is less than 30.
    // This query cannot be constructed using an implicit AND operation, because it uses the $or operator more than once.

    return data;
  } catch {
    return false;
  }
};

const pagination = async (pageNum, res) => {
  var itemsPerPage = 4;
  const count = await UserModel.count();
  if (pageNum <= Math.ceil(count / itemsPerPage)) {
    const data = await UserModel.find({})
      .limit(itemsPerPage)
      .skip(itemsPerPage * (pageNum - 1));
    res.json(data);
  } else {
    res.send("No More Data");
  }
};

module.exports = { findUser, pagination };

console.log("Hello world");
