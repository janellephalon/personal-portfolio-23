// Import Packages or Components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";

// Import Images
// import logo from "../assets/images/logo.svg";
// import logo2 from "../assets/images/logo2.svg";
// import logo3 from "../assets/images/logo3.svg";
import logo4 from "../assets/images/code-solid.svg";
import navIcon1 from "../assets/images/linkedin-in.svg";
import navIncon2 from "../assets/images/github.svg";
import navIncon3 from "../assets/images/tiktok.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  // State of navbar will change as user scrolls
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // Declaring onUpdateActiveLink
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled": ""}>
    <Container>

      <Navbar.Brand href="#home">
      <img src={logo4} alt="logo" className="logoCode" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className="navbar-toggler-icon"></span>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>

        <span className="navbar-text">
          <div className="social-icon">
            <a href="#Home">
              <img src={navIcon1} alt="" className="icon-color"/>
            </a>
            <a href="#Skills">
              <img src={navIncon2} alt="" className="icon-color"/>
            </a>
            <a href="#Projects">
              <img src={navIncon3} alt="" className="icon-color"/>
            </a>
          </div>

          <button className="vvd" onClick={() => console.log('connect')}>
            <span>Let's Connect</span>
          </button>

        </span>
      </Navbar.Collapse>


    </Container>
  </Navbar>
  )
}
