import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Accordion} from 'react-bootstrap';

function Home() {

  const [ratings, setRatings] = useState([]);
  useEffect( ()=>{  //initial, pull the list of comments
    console.log("useEffect ran again");
    axios.get('http://localhost:4000/getRatings')
    .then((response) => {
      setRatings(response.data)
      console.log(response.data);
    })
    .catch(()=>{
      console.log('ERR inside useEffect')
    })
  },[]);

  function display_rating(){
    return(
      ratings.map((rating) => {
        return (
          <div>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{rating.courseCode}</Accordion.Header>
            <Accordion.Body>
              Comment: {rating.comment} <br></br>
              Studytips: {rating.studyTip}
            </Accordion.Body>
            </Accordion.Item>
          </div>
        )
      })
    )
  }

  return (
    <div>
      
      <Accordion>
        {display_rating()}
      </Accordion>
    </div>
  )
}

export default Home; 