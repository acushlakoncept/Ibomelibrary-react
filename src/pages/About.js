import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import '../assets/styles/about.css'
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function About() {
  return (
    <>
      <NavBar />
      <Jumbotron fluid className="about-header">
        <Container>
          <h1 className="display-4 about-head">About Ibom E-library</h1>
          <p className="lead head-p">
            Established in 2012, the Ibom E-library is West Africa's first
            digital library, and one of the biggest digital libraries in Africa.
          </p>
        </Container>
      </Jumbotron>

      <Container>
        <div className="about-content mx-auto">
        <p className="lead"> This is a one-of-a-kind library and the educational edifice is designed to deliver topnotch information and educational services both onsite and virtually.</p>
            
            <p className="lead">Known for not just it's architectural design, the E-library boasts of a multi-functional and state-of-the-art video Conferencing center used for conferences and summits, an e-Learning facility which is primarily designed for ICT training, e-Testing centers, and certification undertakings, board/meeting room for leasing, short-term office space, extensive play area for kids and daycare, a Smart classroom and a reprography unit among other services.</p>
            
            <p className="lead">With the current Private Public Partnership (PPP) between the State Government and HTG Limited, this monumental edifice continues to provide, credible, convenient, and affordable educational technology services for everyone.</p>
            
            <p className="lead">HTG Limited is an outstanding business solutions provider leveraging on technology to proffer business solutions to enterprises and public service organizations. Our core values span across Innovation, resourcefulness, and delivering quality services with the utmost professionalism to our teeming clients. We take pride in our work ethics and the many solutions we consistently offer.</p>
            
            <p className="lead">Our management of such reputable establishments such as the Ibom E-library is a plus to our portfolio and with our strategies in place, the library is in the best hands and will be here for many years to come.
            </p>
            
            <p className="lead">Welcome!</p>
        </div>
    </Container>
    <Footer />
    </>
  );
}
