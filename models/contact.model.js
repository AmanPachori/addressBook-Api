const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { type: String, required: true,unique: true},
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true},
})

const Contact = mongoose.model("contact",contactSchema);

module.exports = Contact;