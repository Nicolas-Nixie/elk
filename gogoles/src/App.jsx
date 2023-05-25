import tenisLogo from './assets/logoMasters.png'
import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RespApi from './component/RespApi';

const baseURL = "http://localhost:8080";

function App() {
  const [data, setData] = useState("");
  const [post, setPost] = useState("");

  const handleChange = (e) => {
    setPost(e.target.value);
  }

   const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`${baseURL}/database/${post}`).then((response) => {
      setData(response.data);
    });
    console.log(data);  
  }


  return (
    <>
      <div>
        <a href='./assets/logoMasters.png' target='_blank'>
          <img src={tenisLogo} className="logo tennis" alt="Tennis logo" />
        </a>
      </div>
      <h1>Gogoles Tennis</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={post} />
        <p>
          <button type='submit'>Valider</button>
        </p>
      </form>

      <p className="read-the-docs">
        Gogoles Tennis est un service qui recherche specifiquement des informations sur les tournois de tennis ATP, les joueur, etc...
      </p>
      <RespApi data={data} />
    </>
  )
}
  
export default App