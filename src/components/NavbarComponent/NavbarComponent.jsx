import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-task");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <Navbar.Brand>React Bootstrap</Navbar.Brand>
            </Nav.Link>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Button type="button" variant="primary" onClick={handleClick}>
              Create Task
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
