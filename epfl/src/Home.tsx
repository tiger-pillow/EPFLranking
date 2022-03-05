import React, {useEffect} from "react";
import axios from 'axios';

function Home() {
  useEffect(()=>{ axios.get('http://localhost:4000/getRatings')
    .then((data) => {
      console.log("successfully got all records", data);
    })
  }, []);

  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

export default Home; 