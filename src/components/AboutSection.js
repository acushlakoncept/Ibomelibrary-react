import React from 'react';
import { Button } from 'react-bootstrap';
import elibraryOpen from '../assets/images/elibrary_open.jpg';
import '../assets/styles/aboutSection.css';

export default function Aboutsection() {
  return (
    <section className="section about">
      <section className="section-box">
        <div className="section-content">
          <h4 className="header-sub">About us</h4>
          <h2 className="head-primary">
            Education
            {' '}
            <span className="head-secondary">per Excellence</span>
          </h2>
          <p className="paragraph">
            With the current Private Public Partnership (PPP) between the State
            Government and HTG Limited, this monumental edifice continues to
            provide, credible, convenient, and affordable educational technology
            services for everyone.
          </p>
          <p className="paragraph">
            HTG Limited is an outstanding business solutions provider leveraging
            on technology to proffer business solutions to enterprises and
            public service organizations. Our core values span across
            Innovation, resourcefulness, and delivering quality services with
            the utmost professionalism to our teeming clients. We take pride in
            our work ethics and the many solutions we consistently offer.
          </p>

          <a href="/about">
            <Button className="btn-htg p-2">read more</Button>
          </a>
        </div>

        <div className="section-img">
          <img
            src={elibraryOpen}
            className="about-img d-inline-block mr-5 p-2"
            alt="elibrary"
          />
        </div>
      </section>
    </section>
  );
}
