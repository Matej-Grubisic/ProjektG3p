import { React } from "react";
import "./styles1.css";
import Container from "react-bootstrap/Container";
import Panda from "./Slike/Pandaexpress.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="HeaderDiv">
      <Navbar expand="lg" variant="light" bg="danger" fixed="top">
        <Container fluid>
          <img
            align="left"
            text-align=" center"
            alt=""
            src={Panda}
            width="75"
            height="75"
            className="d-inline-block align-top"
          />

          <Navbar.Brand>Panda Express</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" className="div1">
                <Link to="/" className="div1">
                  Početna
                </Link>
              </Nav.Link>
              <Nav.Link className="div1">
                <Link to="/Onama" className="div1">
                  O nama
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="div1">
                <Link to="/Lokacije" className="div1">
                  Lokacije
                </Link>
              </Nav.Link>
              <Button variant="light">
                <Navbar.Text className="div2">
                  <Link to="/Narucite" className="div2">
                    <p className="div2">Naručite</p>
                  </Link>
                </Navbar.Text>
              </Button>
              <br />
              <Button variant="outline-danger">
                <Navbar.Text className="div2">
                  Napravio: Matej Grubišić g3p
                </Navbar.Text>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
