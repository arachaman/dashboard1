import React from 'react'
import style from '../css/navigation.css'
import { Nav, Container, Navbar} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
  return (
  <div>
   <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav className="me-1">
            <Nav.Link href="#home"><FontAwesomeIcon icon={faUser} /> Profile </Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
  </div>
  )
}

export default Navigation