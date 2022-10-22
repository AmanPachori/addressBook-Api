const jwt = require("jsonwebtoken");
const Contact = require("../models/contact.model.js");
const asyncHandler = require("express-async-handler");

const VerifyToken = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.contact = Contact.findOne({name:decoded.id})
      next();

    } catch (err) {
      console.log(err);
      res.status(400);
      throw new Error("Not authorised");
    }
    if (!token) {
      res.status(403).json("Not authorised no Token!");
    }
  }
});
module.exports = { VerifyToken };