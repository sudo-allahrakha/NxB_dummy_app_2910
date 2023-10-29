const mongoose = require("mongoose");
// Schema
const productsSchema = new mongoose.Schema({
    productName: String,
    productCategory: String,
    quantity: Number,
    isAvailble: Boolean,
    rating: Object,
    reviews:Array,
    category:{
      type:mongoose.Types.ObjectId,
      ref:'Category',
    }
  });
  
  // Model
  const Products = mongoose.model("products", productsSchema);

  module.exports =Products;