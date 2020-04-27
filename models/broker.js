const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assistantSchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: {type: String, required:true},
  email: {type: String, required:true},
  date: { type: Date, default: Date.now }
});

const Broker = mongoose.model("Broker", brokerSchema);

module.exports = Broker;