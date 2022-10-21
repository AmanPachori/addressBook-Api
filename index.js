require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
const URI = process.env.ATLAS_URL;

const PORT = process.env.PORT || 8000;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection conected to mongo DB");
});

const contact = require('./routes/contact');
app.use('/contact',contact);