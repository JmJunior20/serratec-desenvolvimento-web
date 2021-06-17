import React from 'react';
import Header from './components/Header';
import Principal from './pages/principal'
import "./style.css";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Principal></Principal>
    </div>
  );
}

export default App;
