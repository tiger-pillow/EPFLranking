const express = require("express");
const router = express.Router();
const Rating = require('../schemas/ratingSchema.tsx'); 
const Course = require('../schemas/courseSchema.tsx');

router.get('/getRatings', function(req, res){
  Rating.find({})
    .then((ratings)=>{
      res.end(JSON.stringify(ratings));
    })
})

router.get('/getAllCourses', function(req, res){
  Course.find({})
    .then((courses)=>{
      res.end(JSON.stringify(courses));
    })
})

router.post('/submitRating', function(req, res){
  const newRating = new Rating({
    courseCode: req.body.courseCode, 
    courseRating: req.body.courseRating,
    profRating: req.body.profRating,
    difficulty: req.body.difficulty, 
    workload: req.body.workload, 
    comment: req.body.comment, 
    studyTip: req.body.studyTip
  });
  
  newRating.save()
  console.log("suceeded in submit rating", req.body.courseRating);
  res.sendStatus(200);
})

router.get('/', function (req, res) {
  console.log('NORMAL initial page');
  res.sendStatus(201);
})


module.exports = router;