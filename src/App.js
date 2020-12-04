import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeSlider from './components/HomeSlider';
import NavBar from './components/NavBar';
import Topbox from './components/TopBox';
import booking from './assets/images/booking.jpg'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeSlider />
      <Topbox name="EVENTS" book={booking} alt="events"  />
    </div>
  );
}

export default App;
