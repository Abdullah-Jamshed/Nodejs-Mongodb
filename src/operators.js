const UserModel = require("./userModel");

const findUser = async () => {
  try {
    // //  ==================   READ  ==================

    //  // <<<<============>>>>
    // const data = await UserModel.find({name: "ahmed", age: 20})
    // // implicit logical "AND".

    //  // <<<<============>>>>
    // const data = await UserModel.find({name: "ahmed", age: 20}).explain("executionStats")
    // // or "queryPlanner" or "allPlansExecution"

    //  // <<<<============>>>>
    // const data = await UserModel.distinct("age");
    // // return Array of age in collection

    // // <<<<<=====COUNT======>>>>>

    //  // <<<<============>>>>
    // const data = await UserModel.count({ age: 23 });
    // estimation based on collection metadata

    //  // <<<<============>>>>
    // const data = await UserModel.estimatedDocumentCount();
    // estimation based on collection metadata

    //  // <<<<============>>>>
    // const data = await UserModel.countDocuments({ age: 23 });
    // alias for an aggregation pipeline - accurate coun

    // // <<<<<=====COMPARISION======>>>>>

    //  // <<<<============>>>>
    // const data = await UserModel.find({ age: { $gt: 18 } });
    // // return documents with age value greater than 18

    //  // <<<<============>>>>
    // const data = await UserModel.find({ age: { $gte: 18 } });
    //  // return documents with age value greater than equals 18

    //  // <<<<============>>>>
    // const data = await UserModel.find({ age: { $lt: 18 } });
    //  // return documents with age value less than 18

    //  // <<<<============>>>>
    // const data = await UserModel.find({ age: { $lte: 18 } });
    //  // return documents with age value less than equals 18

    //  // <<<<============>>>>
    // const data = await UserModel.find({ ne: { $ne: 18 } });
    //  // return documents with age value not equals 18

    //  // <<<<============>>>>
    // const data = await UserModel.find({ age: { $in: [20,30] } });
    //  //return documents with age value equals to 20 or 30

    //  // <<<<============>>>>
    // const data = await UserModel.find({ age: { $nin: [20,30] } });
    //  // return all documents with age value not equals to 20 or 30

    // // <<<<<=====LOGICAL======>>>>>

    // <<<<============>>>>
    // const data = await UserModel.find({ name: { $not: { $eq: "ahmed" } } });
    // // SAMEAS
    // const data = await UserModel.find({ name: { $ne: "ahmed" } });
    // // return all documents with name value not equal ahmed

    // <<<<============>>>>
    // const data = await UserModel.find({ $or: [{ age: 20 }, { age: 30 }] });
    // // SAMEAS
    // const data = await UserModel.find({ age: { $in: [20,30] } });
    // // return documents with age value equals to 20 or 30

    // <<<<============>>>>
    // const data = await UserModel.find({ $nor: [{ age: 20 }, { age: 23 }] });
    // // SAMEAS
    // const data = await UserModel.find({ age: { $nin: [20,23] } });
    //  // return all documents with age value not equals to 20 or 30

    // // <<<<============>>>>
    // const data = await UserModel.find({ $and: [{ name: "ahmed" }, { age: 20 }] });
    // // SAMEAS
    // const data = await UserModel.find({ name: "ahmed", age: 20 });
    //  // return all documents with name =to ahmed  and age =to 20

    // // <<<<============>>>>
    // const data = await UserModel.find({ $and: [{ $or: [{ name: "ahmed" }, { name: "fahad" }] }, { $or: [{ age: 20 }, { age: 23 }] }] });
    // // SAMEAS
    // const data = await UserModel.find({ $and: [{ name: { $in: ["ahmed", "fahad"] } }, { age: { $in: [20, 23] } }] });
    //  return all documents with name =to ahmed OR fahad  AND  age =to 20 OR 23

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

    // // <<<<<=====ELEMENTS======>>>>>

    //  // <<<<============>>>>
    // const data = await UserModel.find({ age: { $exists: true } });
    //  // return all documents that contain field age

    //  // <<<<============>>>>

    // ||   Double                        |    1    |       "double"                 |
    // ||   String                        |    2    |       "string"                 |
    // ||   Object                        |    3    |       "object"                 |
    // ||   Array                         |    4    |       "array" Binary           |
    // ||   data                          |    5    |       "binData"                |
    // ||   Undefined                     |    6    |       "undefined"              |      Deprecated.
    // ||   ObjectId                      |    7    |       "objectId"               |
    // ||   Boolean                       |    8    |       "bool"                   |
    // ||   Date                          |    9    |       "date"                   |
    // ||   Null                          |   10    |       "null"                   |
    // ||   Regular Expression            |   11    |       "regex"                  |
    // ||   DBPointer                     |   12    |       "dbPointer"              |      Deprecated.
    // ||   JavaScript                    |   13    |       "javascript"             |
    // ||   Symbol                        |   14    |       "symbol"                 |      Deprecated.
    // ||   JavaScript code with scope    |   15    |       "javascriptWithScope"    |      Deprecated in MongoDB 4.4.
    // ||   32-bit integer|               |   16    |       "int"                    |
    // ||   Timestamp                     |   17    |       "timestamp"              |
    // ||   64-bit integer                |   18    |       "long"                   |
    // ||   Decimal128                    |   19    |       "decimal"                |      New in version  3.4.
    // ||   Min key                       |   -1    |       "minKey"                 |
    // ||   Maxkey                        |  127    |       "maxKey"                 |

    //  // <<<<============>>>>
    // const data = await UserModel.find({ age: { $type: "int" } });
    // const data = await UserModel.find({ age: { $type: 16 } });
    //  // return all documents that contain field age with type of number

    // // <<<<<=====AGGREGATION PIPELINE======>>>>>

    //  // <<<<============>>>>
    const data = await UserModel.aggregate([
      { $match: { status: "A" } },
      { $group: { _id: "$cust_id", total: { $sum: "$amount" } } },
      // { $sort: { total: -1 } },
    ]);
    //  // return all documents that contain field age with type of number

    // //  ==================   UPDATE  ==================

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
