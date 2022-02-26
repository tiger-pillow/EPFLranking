import React, {useState} from "react";
import {Container } from "react-bootstrap";
import axios from 'axios';


function Form() {
  const [course, setCourse] = useState('BLAH');
  const [workload, setWorkload] = useState(1);
  const [prof, setProf] = useState(1);

  const submit = async() => {
    await axios.post('http://localhost:4000/submitRating', {
      courseCode: course, 
    })
      .catch(() => {
        console.log("ERR in new submit form")
      })
  }

  return (
    <Container>
      
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Course Code</label>
        <input type="coursecode" onChange={(event) => setCourse(event.target.value)} placeholder="CS-422"/>
      </div>

      <div className="row mt-3">
        <label for="exampleFormControlInput1" class="form-label ">Workload</label> 

        <div class="col form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
            <label class="form-check-label" for="inlineCheckbox1">Very Light</label>
        </div>

        <div class="col form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label class="form-check-label" for="inlineCheckbox2">Light</label>
        </div>
        <div class="col form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label class="form-check-label" for="inlineCheckbox3">Medium</label>
        </div>
        <div class="col form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
          <label class="form-check-label" for="inlineCheckbox3">Heavy</label>
        </div>
        <div class="col form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
          <label class="form-check-label" for="inlineCheckbox3">Very Heavy</label>
        </div>
      </div>

      <div className = "row mt-3">
        <label for="exampleFormControlInput1" class="form-label">Professor</label> <br></br>

        <div class="col form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
          <label class="form-check-label" for="inlineCheckbox1">Terrible</label>
        </div>

        <div class="col form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
          <label class="form-check-label" for="inlineCheckbox2">Bad</label>
        </div>
        <div class="col form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
          <label class="form-check-label" for="inlineCheckbox3">Okay</label>
        </div>
        <div class="col form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
          <label class="form-check-label" for="inlineCheckbox4">Good</label>
        </div>
        <div class="col form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
          <label class="form-check-label" for="inlineCheckbox5">Excellent </label>
        </div>
      </div>

      <div class="col-12 mt-3">
        <button class="btn btn-primary" onClick={() => { submit() }} >Submit</button>
      </div>

    </Container>


  )

}

export default Form; 