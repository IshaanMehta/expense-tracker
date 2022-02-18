const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/v1/transactions", require("./routes/transactions"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server start on port 5000