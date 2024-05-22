const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const validator = require("validator");

//DB structure defined
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
  },
  email: {
    type: String,
    require: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    require: true,
    min: 10,
  },
  msg: {
    type: String,
    require: true,
    minLength: 3,
  },
});

//collection
const User = mongoose.model("User", userSchema);

//Export the User module
module.exports = User;
