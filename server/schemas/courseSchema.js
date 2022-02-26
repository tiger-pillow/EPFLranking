const mongoose = require("mongoose");

//schema for projects
const courseSchema = new mongoose.Schema({
  name: { type: String, },
  courseCode: { type: String, },
  professorName: { type: String, },
  workloadRating: { type: Array },
  workloadAvg: { type: String, },
  comments: { type: Array, },
  time_added: { type: Date, default: Date.now },
});

module.exports = mongoose.model("course", courseSchema);