import React from 'react'
import { Socket } from 'socket.io-client'
import { ClientToServerEvents, ServerToClientEvents } from '../interfaces'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


type NavProps = {
  socket: Socket<ClientToServerEvents, ServerToClientEvents>
}
const NavComponent = ({ socket }: NavProps) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/products" >
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavComponent;
