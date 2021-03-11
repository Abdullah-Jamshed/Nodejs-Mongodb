const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: "Name must be longer than 2 characters",
    },
    required: [true, "Name Should be Required."],
  },
  age: Number,
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
