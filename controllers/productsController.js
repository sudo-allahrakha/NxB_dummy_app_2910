const express=require("express");
const Products=require("../models/products");

const router=express.Router();

router.get("/products", async (req, res) => {
    try {
      const products = await Products.find({});
      res.status(200).json({ statusCode: 200, data: products });
    } catch (error) {
      console.log(err);
    }
  });


  module.exports = router;