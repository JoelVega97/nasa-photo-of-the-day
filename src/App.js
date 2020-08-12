import React, {useState, useEffect}  from "react";
import "./App.css";
import axios from 'axios'
import {BASE_URL, API} from './index'

//'api_key=Aj87JwreYfnH0gR4XNrmVlkl82xpg57D7vYSFZ1o'
//'https://api.nasa.gov'
///planetary/apod?

function App() {

  const [nasaData, setnasaData] = useState()

  useEffect(() => {
    
    axios(`${BASE_URL}/planetary/apod?${API}`)
      .then(function(res){
        setnasaData(res.data)
        console.log(res.data)
      })
      .catch(function(err){
        console.log ('Well Shoot')
      })
      .finally(function(){

      })

  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
