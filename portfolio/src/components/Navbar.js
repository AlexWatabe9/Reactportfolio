import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const appStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const navStyles = {
  display: 'flex',
  justifyContent: 'center',
};

const linkStyles = {
  fontSize: '1.5rem',
  margin: '0 1rem',
};

const sectionStyles = {
  textAlign: 'center',
  marginBottom: '2rem',
};

const boxStyles = {
  background: '#f8f9fa',
  border: '1px solid #dee2e6',
  padding: '1rem',
  margin: '1rem',
  maxWidth: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const aboutBoxStyles = {
  ...boxStyles,
  maxWidth: '800px',
};

function App() {
  return (
    <div style={appStyles}>
      <Navbar expand="lg" bg="dark" variant="dark" style={navStyles}>
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black' }}>
            Alex's Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" style={linkStyles}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" style={linkStyles}>
                About
              </Nav.Link>
              <Nav.Link href="#projects" style={linkStyles}>
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <section id="about" style={{ ...sectionStyles, ...aboutBoxStyles }}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section id="projects" style={sectionStyles}>
          <div style={boxStyles}>
            <h3>Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div style={boxStyles}>
            <h3>Project 2</h3>
            <p>Description of Project 2</p>
          </div>
          <div style={boxStyles}>
            <h3>Project 3</h3>
            <p>Description of Project 3</p>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default App;
