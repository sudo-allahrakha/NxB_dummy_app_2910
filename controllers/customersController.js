const mongoose = require("mongoose");
const Customers = require("../models/customers");
const express = require("express");
const router = express.Router();

router.post("/customers", async (req, res) => {
  try {
    // const {username,name,adress} = req.body;
    
    // custom validation rules
    
    // if (!username){
    //   return res.status(400).json({message:"Name field is required"});
    // }

     const customerData = req.body;
    let _customer = new Customers(customerData);
    const saveResponse = await _customer.save();
    if (saveResponse != null) {
      res.status(200).json({ statusCode: 200, data: saveResponse });
    } else
      res.status(500).json({ statusCode: 500, errorMessage: saveResponse });
  } catch (error) {
    console.log("exception: " + error);
    res.status(500).json({ statusCode: 500, errorMessage: error.toString() });
  }
});

router.get("/customers", async (req, res) => {
  try {
    const customers = await Customers.find({});
    res.status(200).json({ statusCode: 200, data: customers });
  } catch (error) {
    console.log("exception: " + error);
    res.status(500).json({ statusCode: 500, errorMessage: error.toString() });
  }
});

router.get("/customers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const ObjectId = require("mongodb").ObjectId;
    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ statusCode: 400, errorMessage: "Invalid id" });
    }

    const customers = await Customers.find({
      _id: new mongoose.Types.ObjectId(id),
    });
    res.status(200).json({ statusCode: 200, data: customers });
  } catch (error) {
    console.log("exception: " + error);
    res.status(500).json({ statusCode: 500, errorMessage: error.toString() });
  }
});

router.delete("/customers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const ObjectId = require("mongodb").ObjectId;
    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ statusCode: 400, errorMessage: "Invalid id" });
    }

    // Todo: Check if customer exists
    const customers = await Customers.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    res.status(200).json({ statusCode: 200, data: customers });
  } catch (error) {
    console.log("exception: " + error);
    res.status(500).json({ statusCode: 500, errorMessage: error.toString() });
  }
});

// Todo : Update customer

module.exports = router;
