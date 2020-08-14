import React, {useState, useEffect}  from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API} from './index';
import Header from "./Components/Header";
import MidContainer from "./Components/MidContainer";

//'api_key=Aj87JwreYfnH0gR4XNrmVlkl82xpg57D7vYSFZ1o'
//'https://api.nasa.gov'
///planetary/apod?

function App() {

  const [nasaData, setnasaData] = useState({})

  useEffect(() => {
    
    axios(`${BASE_URL}/planetary/apod?${API}`)
      .then(function(res){
        setnasaData(res.data)
        // console.log(res.data)
      })
      .catch(function(err){
        console.log ('Well Shoot')
      })
      .finally(function(){

      })

  }, [])

  useEffect(() => {
    console.log(nasaData)
  }, [nasaData])

  return (
    <div className="App">

      <Header title = {nasaData.title} date = {nasaData.date} />
      <MidContainer url = {nasaData.url} text = {nasaData.explanation} cc = {nasaData.copyright} />

    </div>
  );
}

export default App;
