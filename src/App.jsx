import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

function App() {

  const [facts,setFacts] = useState([]);

  const getFacts = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(res => setFacts(res.data.results))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={getFacts}>Fetch Pokemon</button>
      {
        facts.map((cat, i) => {  
          return <p key={i}>{cat.name}</p> 
        })
      }
    </div>
  );
}

export default App;
