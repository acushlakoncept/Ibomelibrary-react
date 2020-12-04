import React from "react";
import { Container } from "react-bootstrap";
import htgLogo from "../assets/images/htg-logo.png";

export default function Footer() {
  return (
    <footer className="footer text-muted bg-light">
      <Container>
        <span>
          Managed by <img src={htgLogo} className="htg-logo" alt="htg logo" />
        </span>
        <span>{`© ${new Date().getFullYear()} Ibom eLibrary | All rights reserved.`}</span>

        <ul className="list-inline mb-0 float-right">
          <li className="list-inline-item mr-3">+234 817 3939 393</li>
          <li className="list-inline-item mr-3">info@theibomelibrary.com</li>
          <li className="list-inline-item mr-3">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item mr-3">
            <a href="#">Privacy</a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
