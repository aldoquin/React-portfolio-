import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'

export default function navbar() {
  return (
     <Navbar className="navbar" style={{background:'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(138,201,233,1) 100%, rgba(0,212,255,1) 100%)'}}  >
  <Container >
    <Navbar.Brand href="#home" style={{color: "white",}} >Aldo Quintero</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="me-auto" >
        <Nav.Link href="#AboutMeSec" style={{color: "white"}}>About Me</Nav.Link>
        <Nav.Link href="#text-center" style={{color: "white"}}>Contact</Nav.Link>
        <Nav.Link href="#projectSection" style={{color: "white"}}>Projects</Nav.Link>
      </Nav>
  </Container>
</Navbar>  
  )
}
