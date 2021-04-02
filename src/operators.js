const UserModel = require("./userModel");

const findUser = async () => {
  try {
    //  // <<<<============>>>>
    // const data = await UserModel.find({name: "ahmed", age: 20})
    // // implicit logical "AND".

    //  // <<<<============>>>>
    // const data = await UserModel.find({name: "ahmed", age: 20}).explain("executionStats")
    // // or "queryPlanner" or "allPlansExecution"

    //  // <<<<============>>>>
    // const data = await UserModel.distinct("age");
    // // return Array of age in collection

    //  // <<<<============>>>>
    // const data = await UserModel.count({ age: 23 });
    // estimation based on collection metadata


    //  // <<<<============>>>>
    // const data = await UserModel.estimatedDocumentCount();
    // estimation based on collection metadata


    //  // <<<<============>>>>
    // const data = await UserModel.countDocuments({ age: 23 });
    // alias for an aggregation pipeline - accurate coun


    //  // <<<<============>>>>
    // const data = await UserModel.find({ age: { $gt: 18 } }); 
    // return documents with age value greater than 18

    //  // <<<<============>>>>
    // const data = await UserModel.find({ $and: [{ age: { $ne: 20 } }, { age: { $exists: true } }] });
    // // This query will select all documents in the inventory collection where:
    // // the age field value is not equal to 20 and
    // // the age field exists.

    //  // <<<<============>>>>
    // const data = await UserModel.find({ age: { $ne: 20, $exists: true } });
    // // This query can be also be constructed with an implicit AND operation
    // // by combining the operator expressions for the age field. For example, this query can be written as:

    // //   <<<<============>>>>
    //  const data = await UserModel.find({
    //    $and: [{ $or: [{ age: 20 }, { age: 2 }] }, { $or: [{ name: "abdullah" }, { age: { $lt: 30 } }] }],
    //  });
    // // This query will select all documents where: the age field value equals 20 or 2, and
    // // the age field value is less than 30.
    // // This query cannot be constructed using an implicit AND operation, because it uses the $or operator more than once.

    return data;
  } catch {
    return null;
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
