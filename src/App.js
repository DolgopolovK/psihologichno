
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const cardDataList = "0.0.0.0:8001";

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    axios
      .get(cardDataList)
      .then(data => {
        setArticles(data)
      })
  }, []);

  return (
    <div className="App">
      {articles.map(articles => {
        return (
          <p>{articles}</p>
      )
      })}
      {/* <Main/> */}
    </div>
  );
}

export default App;
