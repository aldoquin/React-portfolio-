import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'

export default function navbar() {
  return (
     <Navbar className="navbar" bg="dark"  >
  <Container >
    <Navbar.Brand href="#home" style={{color: "white",}} >Aldo Quintero</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="me-auto" >
        <Nav.Link href="#AboutMeSec" style={{color: "white"}}>About Me</Nav.Link>
        <Nav.Link href="#link" style={{color: "white"}}>Contact</Nav.Link>
        <Nav.Link href="#link" style={{color: "white"}}>Portfolio</Nav.Link>
      </Nav>
  </Container>
</Navbar>  
  )
}
