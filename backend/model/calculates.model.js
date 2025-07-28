const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  jobName: { type: String, required: true },
  businessValue: { type: Number, required: true },
  timeCriticality: { type: Number, required: true },
  riskReduction: { type: Number, required: true },
  jobSize: { type: Number, required: true },
  wsjf: { type: Number },
});

const Calculate = mongoose.model("Calculate", schema);

module.exports = Calculate;
