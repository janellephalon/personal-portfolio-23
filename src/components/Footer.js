import { Container, Col, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

import logo from "../assets/images/code-solid.svg";
import navIcon1 from "../assets/images/linkedin-in.svg";
import navIncon2 from "../assets/images/github.svg";
import navIncon3 from "../assets/images/tiktok.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href=""> <img src={navIcon1} /> </a>
              <a href=""> <img src={navIncon2} /> </a>
              <a href=""> <img src={navIncon3} /> </a>
            </div>
            <p>
              Copyright 2023, All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
