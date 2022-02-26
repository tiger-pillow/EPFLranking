const express = require("express");
const router = express.Router();
const Course = require('../schemas/courseSchema.js'); 

router.post('/submitRating', function(req, res){
  const newCourse = new Course({
    courseCode: req.body.course, 
    profRating: req.body.prof,
  });
  newCourse.save()
  console.log("suceeded in submit rating");
  res.sendStatus(200);
})

router.get('/', function (req, res) {
  console.log('NORMAL initial page');
  res.sendStatus(201);
})


module.exports = router;