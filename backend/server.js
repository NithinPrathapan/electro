import express from "express";
import dotenv from "dotenv";
dotenv.config();
import productRoutes from './routes/productRoutes.js'

const app = express();

app.use("/api/product", productRoutes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("server started on port", port);
});
