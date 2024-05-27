import express from "express";
import dotenv from "dotenv";
dotenv.config();
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("server started on port", port);
});
