
const mongoose = require("mongoose");


const customersSchema = new mongoose.Schema({
   
  // mongoose schema validation
  username: {
      type: String,
      unique: true,
      required: [true,"Why you are scared to provide username ?"]
    },
    // username:String,
    name: String,
    address: String,
  });
  
  const Customers = mongoose.model("customers", customersSchema);


  module.exports=Customers