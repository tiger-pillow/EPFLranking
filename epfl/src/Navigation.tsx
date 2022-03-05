import React from "react";
import{Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';


function Navigation () {

  return(
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">EPFL CourseRank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/form">Submit Rating</Nav.Link>
              <Nav.Link href="/form2">Form 2</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/cs">IN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">MTE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CS</NavDropdown.Item>
          
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
    </div>
  )
}

export default Navigation; 