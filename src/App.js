import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/posts")
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {title.map((info) => {
        return(
          <>
          <h1>{info.title}</h1>
          <hr/>
          </>
        )
      })}
    
      </div>
  );
}

export default App;
