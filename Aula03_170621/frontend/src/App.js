import React from 'react';
import Header from './components/Header';

import Routes from "./routes";

import "./style.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
