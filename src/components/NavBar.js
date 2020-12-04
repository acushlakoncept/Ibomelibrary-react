import React from "react";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../assets/images/ibom-logo.png'
import '../assets/styles/navbar.css'

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="home-nav">
      <div className="container">
      <Navbar.Brand href="/"><img
            className="ibom-logo"
            src={logo}
            alt="Ibomelibrary logo"
          /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="/about">About</Nav.Link>
          <NavDropdown title="Products" id="collasible-nav-dropdown">
            <NavDropdown.Item href="http://opac.theibomelibrary.com/" target="__blank" rel="noopener">Elibrary Access</NavDropdown.Item>
            <NavDropdown.Item href="https://blinc.com.ng/" target="__blank" rel="noopener">
                BLINC
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Excursion</NavDropdown.Item>
            <NavDropdown.Item href="http://htgacademy.com/" target="__blank" rel="noopener">HTG Academy</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://form.jotform.com/203304865946562" target="__blank" rel="noopener">
              Office/Co-working Spaces
            </NavDropdown.Item>
            <NavDropdown.Item href="https://form.jotform.com/203302000567540" target="__blank" rel="noopener">
              Event Center Rentals
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Blog</Nav.Link>
          <Nav.Link eventKey={2} href="#">
            Support
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
