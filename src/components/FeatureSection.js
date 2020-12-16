import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbox from './TopBox';
import booking from '../assets/images/booking.jpg';
import demo from '../assets/images/demo.jpg';
import tryit from '../assets/images/tryit.jpg';
import registration from '../assets/images/registration.jpg';

export default function Featuresection() {
  return (
    <Container>
      <Row className="justify-content-around mb-2 pt-4 pb-4">
        <Topbox name="EVENTS" brName="Book Now" image={booking} alt="events" link="https://form.jotform.com/203441779991568" />
        <Topbox name="BLINC  All-in-one tech school solution" brName="Request a Demo" image={demo} alt="request demo" />
        <Topbox name="Online Public Access Catalog" brName="Try it" image={tryit} alt="Try it" link="https://search.theibomelibrary.com/" />
        <Topbox name="HTG Academy" brName="Register Now" image={registration} alt="registration" />
      </Row>
    </Container>
  );
}
