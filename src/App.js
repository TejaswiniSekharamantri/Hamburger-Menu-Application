import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/Navbar';
import LoginPage from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginPage />
    </div>
  );
}

export default App;
