import React, {useEffect, useState} from "react";
import {Container, Form} from "react-bootstrap";
import axios from 'axios';


function RatingForm() {
  const [courseCode, setCourseCode] = useState('');
  const [courseRating, setCourseRating] = useState(0);
  const [workload, setWorkload] = useState(0);
  const [profRating, setProfRating] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [comment, setComment] = useState("");
  const [studyTip, setStudyTip] = useState("");
  
  let [infojoint, setInfo] = useState([])

 useEffect(function findListInfo() { // only load once at the beginning 
    let infojointtemp: string[] = [];
    axios.get('http://localhost:4000/getAllCourses')
      .then((response)=>{
        response.data.map((res) => { 
          let tempstring: string[] = [res.courseCode, res.courseName, res.courseProf.toLowerCase()];
          console.log("temp string is", tempstring.join())
          infojointtemp.push(tempstring.join(' '));
          })
      })
      .then(()=>{setInfo(infojointtemp)})
  }, []);
  

  /* Submit 1 rating for 1 course */
  const submitForm = async() => {
      await axios.post('http://localhost:4000/submitRating', {
        courseCode: courseCode,
        courseRating: courseRating,
        difficulty: difficulty,
        workload: workload,
        profRating: profRating,
        comment: comment,
        studyTip: studyTip,
      })
        .catch(() => {
          console.log("ERR in new submit form")
        })
    }
  
  /* Search Bar with Filtering Abilities */

  function searchBarFilter() {
    return (
      <div>
        {infojoint.map((info: string) => {
          if (courseCode !== "" && info.includes(courseCode.toLowerCase()) && !infojoint.includes(courseCode)) {
            return (
              <div onClick={() => {setCourseCode(info)}}> {info} </div>)
          }
        })}
      </div>
    )
  }

  useEffect(()=>{searchBarFilter()}, [courseCode]); 

  return (
    <Container>
    <Form>
      <div className="mb-3">
        <label >Course Code</label>
        <div className="ml-3"> 
          <input  type="coursecode" onChange={(event) => setCourseCode(event.target.value)} placeholder="CS-413" value = {courseCode} required/>
          {searchBarFilter()}
        </div>
      </div>

      <div className="row">
        <label > How is the Course?  </label><br></br>
        <div className="form-check col-1">
          <input className="form-check-input" name="courserating" type="radio" checked={courseRating === 1} onClick={() => setCourseRating(1)} required/>
          <label className="form-check-label" >Terrible</label>
        </div>
        <div className="form-check col-1 ">
            <input className="form-check-input" name="courserating" type="radio" checked={courseRating === 2} onClick={() => setCourseRating(2)} />
          <label className="form-check-label" >Bad</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="courserating" type="radio" checked={courseRating === 3} onClick={() => setCourseRating(3)} />
          <label className="form-check-label" >Medium</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="courserating" type="radio" checked={courseRating === 4} onClick={() => setCourseRating(4)} />
          <label className="form-check-label" >Good</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="courserating" type="radio" checked={courseRating === 3} onClick={() => setCourseRating(3)} />
          <label className="form-check-label"> Excellent</label>
        </div>
      </div>

    
      <div className = "row" >
        <label > How is the professor? (clairty, organization, accessibility) </label><br></br>
        <div className="form-check col-1">
            <input className="form-check-input" name="profrating" type="radio" checked={profRating === 1} onClick={() => setProfRating(1)} required />
            <label className="form-check-label">Terrible</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="profrating" type="radio" checked={profRating === 2} onClick={() => setProfRating(2)} />
            <label className="form-check-label">Bad</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="profrating" type="radio" checked={profRating === 3} onClick={() => setProfRating(3)} />
          <label className="form-check-label">Medium</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="profrating" type="radio" checked={profRating === 4} onClick={() => setProfRating(4)} />
          <label className="form-check-label" >Good</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="profrating" type="radio" checked={profRating === 5} onClick={() => setProfRating(5)} />
          <label className="form-check-label" >Excellent</label>
        </div>


      </div>

      <div className="row" >
        <label > Difficulty? </label><br></br>
        <div className="form-check col-1">
          <input className="form-check-input" name="difffrating" type="radio" checked={difficulty === 1} onClick={() => setDifficulty(1)} required/>
          <label className="form-check-label">Very Easy</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="difffrating" type="radio" checked={difficulty === 2} onClick={() => setDifficulty(2)} />
          <label className="form-check-label">Easy</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="difffrating" type="radio" checked={difficulty === 3} onClick={() => setDifficulty(3)} />
          <label className="form-check-label">Medium</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="difffrating" type="radio" checked={difficulty === 4} onClick={() => setDifficulty(4)} />
          <label className="form-check-label">Hard</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="difffrating" type="radio" checked={difficulty === 5} onClick={() => setDifficulty(5)} />
          <label className="form-check-label">Very Hard</label>
        </div>
      </div>


      <div className="row" >
        <label > Workload (considering the credit worth) </label><br></br>
        <div className="form-check col-1">
          <input className="form-check-input" name="workloadrating" type="radio" checked={workload === 1} onClick={() => setWorkload(1)} required/>
          <label className="form-check-label" >Very Light</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="workloadrating" type="radio" checked={workload === 2} onClick={() => setWorkload(2)} />
          <label className="form-check-label" >Light</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="workloadrating" type="radio" checked={workload === 3} onClick={() => setWorkload(3)} />
          <label className="form-check-label" >Medium</label>
        </div>
        <div className="form-check col-1">
            <input className="form-check-input" name="workloadrating" type="radio" checked={workload === 4} onClick={() => setWorkload(4)} />
          <label className="form-check-label" >Heavy</label>
        </div>
        <div className="form-check col-2">
            <input className="form-check-input" name="workloadrating" type="radio" checked={workload === 5} onClick={() => setWorkload(5)} />
          <label className="form-check-label" >Very Heavy</label>
        </div>
      </div>

      <div className="col-6 mt-4">
        <label > Comments </label><br></br>
          <textarea className="form-control" aria-label="With textarea" onChange={(event) => { setComment(event.target.value) }} required></textarea>
      </div>

      <div className="col-6 mt-4">
        <label > Study Tips </label><br></br>
        <textarea className="form-control" aria-label="With textarea" onChange={(event) => { setStudyTip(event.target.value) }} required></textarea>
      </div>

      
      <div className="col-12 mt-3">
        <button className="btn btn-primary" onClick={() => { submitForm() }}>Submit</button>
      </div>

    </Form>
    </Container>


  )

}

export default RatingForm; 