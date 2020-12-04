import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeSlider from './components/HomeSlider';
import NavBar from './components/NavBar';
import FeatureSection from './components/FeatureSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeSlider />
      <FeatureSection />
      <AboutSection />
    </div>
  );
}

export default App;
