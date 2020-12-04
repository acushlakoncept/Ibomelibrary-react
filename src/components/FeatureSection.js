import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Topbox from './TopBox';
import booking from '../assets/images/booking.jpg'

export default function Featuresection() {
    

    return (
        <Container>
            <Row class="d-flex justify-content-around flex-wrap mb-2 pt-4 pb-4">
                <Topbox name="EVENTS" image={booking} alt="events"  />
                <Topbox name="EVENTS" image={booking} alt="events"  />
                <Topbox name="EVENTS" image={booking} alt="events"  />
                <Topbox name="EVENTS" image={booking} alt="events"  />
            </Row>
        </Container>
    )
}
