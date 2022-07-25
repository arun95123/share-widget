import React from 'react';
import './App.css';
import Notion from './Components/Notion/Notion';
import inputData from './Data/data';

function App() {
  return (
    <div className="App">
      <Notion data={inputData}/>
    </div>
  );
}

export default App;
