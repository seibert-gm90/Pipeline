const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assistantSchema = new Schema({
  name: { type: String, required: true },
  // console.log()
  phoneNumber: {type: String, required:true},
  email: {type: String, required:true},
  date: { type: Date, default: Date.now }
});

const Assistant = mongoose.model("Assistant", assistantSchema);

module.exports = Assistant;