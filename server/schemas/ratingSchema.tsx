const mongoose = require("mongoose");

//schema for projects
const ratingSchema = new mongoose.Schema({
  courseCode: { type: String, },
  courseRating: {type:Number}, 
  profRating: {type: Number},
  workload: { type: Number },
  difficulty: {type: Number}, 
  comment: { type: String },
  studyTip: { type:String}, 
  time_added: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Rating", ratingSchema);