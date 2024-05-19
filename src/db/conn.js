const mongoose = require("mongoose");

//Creating a DB
mongoose
  .connect("mongodb://localhost:27017/nodedynamic")
  .then(() => {
    console.log("Connection Success!");
  })
  .catch((error) => {
    console.log(error);
  });
