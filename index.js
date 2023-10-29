const express = require("express");
const cors=require("cors");
const customersRoutes=require("./controllers/customersController");
const productsRoutes=require("./controllers/productsController");
const db=require("./utils/db");
db.connect();


require("dotenv").config();
const port = process.env.PORT || 3000;
const host=process.env.HTTP_HOST || 'localhost';
const app = express();
app.use(express.json());
app.use(cors());

app.use("/v1",productsRoutes);
app.use("/v2",customersRoutes);



app.get("/", async (req, res) => {
  res.send(`express server is running on ${port}...`);
});

app.listen(port,host , () => {
  console.log("listening on port " + port);
});
