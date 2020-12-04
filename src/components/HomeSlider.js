import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slide001 from '../assets/images/banner/slide001.jpg'
import slide002 from '../assets/images/banner/slide002.jpg'
import slide003 from '../assets/images/banner/slide003_boyreading.jpg'
import '../assets/styles/slider.css';

export default function HomeSlider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="home-slider">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide001}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Learn . Innovate . Impact</h1><br />
            <p>More than a  library</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide002}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h1>West Africa's first digital library</h1><br />
            <p>Designed to deliver topnotch information and educational services both onsite and virtually.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide003}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h1>Technology and Education Cradle</h1><br />
            <p>
            A springboard to African solutions created by African for African challenges
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }