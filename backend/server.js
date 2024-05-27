import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("server started on port", port);
});
