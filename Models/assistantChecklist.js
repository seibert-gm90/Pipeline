const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checklistAssistant = new Schema({
  creditCheck: { type: Boolean, required: true },
  draftLease: {type: Boolean, required:true},
  assembleFile: {type: Boolean, required:true},
  landlordExecution: {type: Boolean, required:true},
  date: { type: Date, default: Date.now }
});

const AssistantChkLst = mongoose.model("Assistant Checklist", checklistAssistant);

module.exports = AssistantChkLst;