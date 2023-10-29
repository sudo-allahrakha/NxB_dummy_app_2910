const mongoose = require("mongoose");
require("dotenv").config();

module.exports = {
  connect: function () {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("database connection established");
      })
      .catch((err) => {
        console.log("database connection error", err);
      });
  },
};


