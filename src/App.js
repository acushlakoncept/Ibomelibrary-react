import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeSlider from './components/HomeSlider';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeSlider />
    </div>
  );
}

export default App;
