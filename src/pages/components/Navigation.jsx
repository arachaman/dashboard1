import React from "react";
import style from "../css/navigation.css";
import { Nav, Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/ITPersonnel">
              Chart
            </Nav.Link>
          </Nav>
          <Nav className="me-1">
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faUser} /> Profile{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
