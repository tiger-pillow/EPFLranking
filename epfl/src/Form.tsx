import React, {useEffect, useState} from "react";
import {Container, Form} from "react-bootstrap";
import {Toast} from 'bootstrap'
import axios from 'axios';


function RatingForm() {
  const [courseCode, setCourseCode] = useState('');
  const [courseRating, setCourseRating] = useState(0);
  const [workload, setWorkload] = useState(0);
  const [profRating, setProfRating] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [comment, setComment] = useState("");
  const [studyTip, setStudyTip] = useState("");
 
  /* Submit 1 rating for 1 course */
  const submitForm = async() => {
    if (courseRating === 0 || workload === 0 || profRating === 0 || difficulty === 0){
      var toastLiveExample = document.getElementById('liveToast');
      var toast = new Toast(toastLiveExample);
      toast.show();

      return(false);
    }
    else {
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
  }

  /* Search Bar with Filtering Abilities */
  const codes: string[] = ['cs-413', 'cs-422', 'cs-442', 'computational photography','fin-411','mgt-410',
  'mgt-581'];

  function searchBarFilter() {
    return (
      <div>
        {codes.map((code: string) => {
          if (courseCode !== "" && code.includes(courseCode.toLowerCase()) && !codes.includes(courseCode)) {
            return (
              <div onClick={() => {setCourseCode(code)}}> {code} </div>)
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

      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <img src="..." class="rounded me-2" alt="..."/>
            <strong class="me-auto">Bootstrap</strong>
            <small class="text-muted">11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
 
      <div className="row">
        <label > How is the Course?  </label><br></br>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={courseRating === 1} onClick={() => setCourseRating(1)} />
          <label className="form-check-label" for="flexRadioDefault1">Terrible</label>
        </div>
        <div className="form-check col-1 ">
          <input className="form-check-input" type="radio" checked={courseRating === 2} onClick={() => setCourseRating(2)} />
          <label className="form-check-label" for="flexRadioDefault2">Bad</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={courseRating === 3} onClick={() => setCourseRating(3)} />
          <label className="form-check-label" for="flexRadioDefault1">Medium</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={courseRating === 4} onClick={() => setCourseRating(4)} />
          <label className="form-check-label" for="flexRadioDefault1">Good</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={courseRating === 3} onClick={() => setCourseRating(3)} />
          <label className="form-check-label" for="flexRadioDefault1">Excellent</label>
        </div>
      </div>

    
      <div className = "row" >
        <label > How is the professor? (clairty, organization, accessibility) </label><br></br>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={profRating === 1} onClick={() => setProfRating(1)} />
            <label className="form-check-label" for="flexRadioDefault1">Terrible</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={profRating === 2} onClick={() => setProfRating(2)} />
            <label className="form-check-label" for="flexRadioDefault2">Bad</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={profRating === 3} onClick={() => setProfRating(3)} />
          <label className="form-check-label" for="flexRadioDefault1">Medium</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={profRating === 4} onClick={() => setProfRating(4)} />
          <label className="form-check-label" for="flexRadioDefault1">Good</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={profRating === 5} onClick={() => setProfRating(5)} />
          <label className="form-check-label" for="flexRadioDefault1">Excellent</label>
        </div>


      </div>

      <div className="row" >
        <label > Difficulty? </label><br></br>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={difficulty === 1} onClick={() => setDifficulty(1)} />
          <label className="form-check-label" for="flexRadioDefault1">Very Easy</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={difficulty === 2} onClick={() => setDifficulty(2)} />
          <label className="form-check-label" for="flexRadioDefault1">Easy</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={difficulty === 3} onClick={() => setDifficulty(3)} />
          <label className="form-check-label" for="flexRadioDefault1">Medium</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={difficulty === 4} onClick={() => setDifficulty(4)} />
          <label className="form-check-label" for="flexRadioDefault2">Hard</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={difficulty === 5} onClick={() => setDifficulty(5)} />
          <label className="form-check-label" for="flexRadioDefault1">Very Hard</label>
        </div>
      </div>


      <div className="row" >
        <label > Workload (considering the credit worth) </label><br></br>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={workload === 1} onClick={() => setWorkload(1)} />
          <label className="form-check-label" for="flexRadioDefault1">Very Light</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={workload === 2} onClick={() => setWorkload(2)} />
          <label className="form-check-label" for="flexRadioDefault2">Light</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={workload === 3} onClick={() => setWorkload(3)} />
          <label className="form-check-label" for="flexRadioDefault1">Medium</label>
        </div>
        <div className="form-check col-1">
          <input className="form-check-input" type="radio" checked={workload === 4} onClick={() => setWorkload(4)} />
          <label className="form-check-label" for="flexRadioDefault1">Heavy</label>
        </div>
        <div className="form-check col-2">
          <input className="form-check-input" type="radio" checked={workload === 5} onClick={() => setWorkload(5)} />
          <label className="form-check-label" for="flexRadioDefault1">Very Heavy</label>
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