const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseCode: { type: String, },
    courseName: { type: String },
    courseProf: { type: String},
    time_added: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", courseSchema);