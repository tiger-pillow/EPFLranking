import React, {useState} from "react";
import {Container } from "react-bootstrap";
import axios from 'axios';


function Form() {
  const [courseCode, setCourseCode] = useState('EMPTY CLASS CODE');
  const [courseRating, setCourseRating] = useState(0);
  const [workload, setWorkload] = useState(0);
  const [profRating, setProfRating] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [comment, setComment] = useState("");
  const [studyTip, setStudyTip] = useState("");

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

  return (
    <Container>
      
      <div className="mb-3">
        <label >Course Code</label>
        <div className="ml-3"> 
          <input  type="coursecode" onChange={(event) => setCourseCode(event.target.value)} placeholder="CS-422"/>
        </div>
      </div>

      <div className="row">
        <label > How is the class?  </label><br></br>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={courseRating === 1} onClick={() => setCourseRating(1)} />
          <label class="form-check-label" for="flexRadioDefault1">Bad</label>
            
          
        </div>
        <div class="form-check col-1 ">
          <input class="form-check-input" type="radio" checked={courseRating === 2} onClick={() => setCourseRating(2)} />
          <label class="form-check-label" for="flexRadioDefault2">Okay</label>
            
          
        </div>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={courseRating === 3} onClick={() => setCourseRating(3)} />
          <label class="form-check-label" for="flexRadioDefault1">Good</label>
            
          
        </div>
      </div>

    
      <div className = "row" >
        <label > How is the professor? (clairty, organization, accessibility) </label><br></br>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={profRating === 1} onClick={() => setProfRating(1)} />
            <label class="form-check-label" for="flexRadioDefault1">Bad</label>
        </div>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={profRating === 2} onClick={() => setProfRating(2)} />
            <label class="form-check-label" for="flexRadioDefault2">Okay</label>
             
        </div>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={profRating === 3} onClick={() => setProfRating(3)} />
          <label class="form-check-label" for="flexRadioDefault1">Good</label>
            
        </div>
      </div>

      <div className="row" >
        <label > Difficulty? </label><br></br>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={difficulty === 1} onClick={() => setDifficulty(1)} />
          <label class="form-check-label" for="flexRadioDefault1">Very Easy</label>
        </div>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={difficulty === 2} onClick={() => setDifficulty(2)} />
          <label class="form-check-label" for="flexRadioDefault1">Easy</label>
        </div>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={difficulty === 3} onClick={() => setDifficulty(3)} />
          <label class="form-check-label" for="flexRadioDefault1">Medium</label>
        </div>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={difficulty === 4} onClick={() => setDifficulty(4)} />
          <label class="form-check-label" for="flexRadioDefault2">Hard</label>
        </div>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={difficulty === 5} onClick={() => setDifficulty(5)} />
          <label class="form-check-label" for="flexRadioDefault1">Very Hard</label>
        </div>
      </div>


      <div className="row" >
        <label > Workload (considering the credit worth) </label><br></br>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={workload === 1} onClick={() => setWorkload(1)} />
          <label class="form-check-label" for="flexRadioDefault1">Little</label>
        </div>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={workload === 2} onClick={() => setWorkload(2)} />
          <label class="form-check-label" for="flexRadioDefault2">Medium</label>
        </div>
        <div class="form-check col-1">
          <input class="form-check-input" type="radio" checked={workload === 3} onClick={() => setWorkload(3)} />
          <label class="form-check-label" for="flexRadioDefault1"> Heavy</label>
        </div>
      </div>

      <div className="col-6 mt-4">
        <label > Comments </label><br></br>
        <textarea class="form-control" aria-label="With textarea" onChange={(event) => { setComment(event.target.value) }}></textarea>
      </div>

      <div className="col-6 mt-4">
        <label > Study Tips </label><br></br>
        <textarea class="form-control" aria-label="With textarea" onChange={(event) => { setStudyTip(event.target.value) }} ></textarea>
      </div>

      <div class="col-12 mt-3">
        <button class="btn btn-primary" onClick={() => { submitForm() }} >Submit</button>
      </div>

    </Container>


  )

}

export default Form; 