const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const caseSchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: {type: String, required:true},
  email: {type: String, required:true},
  broker:{type: String, required:true}, 
  property:{type: String, required:true},
  date: { type: Date, default: Date.now }
});

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;