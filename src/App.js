import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Nav/Navbar';
import LoginPage from './component/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginPage />
    </div>
  );
}

export default App;
