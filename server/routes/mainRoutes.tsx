const express = require("express");
const router = express.Router();
const Rating = require('../schemas/ratingSchema.js'); 


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
  console.log("suceeded in submit rating");
  res.sendStatus(200);
})

router.get('/', function (req, res) {
  console.log('NORMAL initial page');
  res.sendStatus(201);
})


module.exports = router;