const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checklistBroker = new Schema({
  signedLease: { type: Boolean, required: true },
  securityDeposit: {type: Boolean, required:true},
  date: { type: Date, default: Date.now }
});

const BrokerChkLst = mongoose.model("Broker Checklist", checklistBroker);

module.exports = BrokerChkLst;