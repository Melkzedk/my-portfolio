import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaAddressBook, FaEnvelope } from 'react-icons/fa';

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Close navbar after link click
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-info fs-4">
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase fw-semibold">
            <Nav.Link href="#home" onClick={handleNavClick} className="mx-2">
              <FaHome className="me-1" /> Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleNavClick} className="mx-2">
              <FaUser className="me-1" /> About
            </Nav.Link>
            <Nav.Link href="#skills" onClick={handleNavClick} className="mx-2">
              <FaTools className="me-1" /> Skills
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavClick} className="mx-2">
              <FaProjectDiagram className="me-1" /> Projects
            </Nav.Link>
            <Nav.Link href="#references" onClick={handleNavClick} className="mx-2">
              <FaAddressBook className="me-1" /> References
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClick} className="mx-2">
              <FaEnvelope className="me-1" /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
