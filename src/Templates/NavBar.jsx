import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from 'react-bootstrap';
import "../App.css";

function NavBar() {
    return(
        <>
        <div style={{backgroundColor:" rgba(0, 0, 0, 0.16)"}}>
        <Navbar expand="lg">
      <Navbar.Brand> 
      <Link to="/"  style={{textDecoration:"none", fontSize:"40px", fontWeight:"600", marginLeft:"32rem",marginTop:"2rem", fontFamily: "Playfair Display, serif", color:"rgba(110, 110, 110)", }}>
          CV Templates
        </Link>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Nav className="ml-auto navbar">
          {/* <Nav.Item>
            <Nav.Link as={Link} className="nav-bar-link" to="/Temp1">
              <div className="pic1">
                temp1
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} className="nav-bar-link" to="/Temp2">
              Temp2
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} className="nav-bar-link" to="/Temp3">
              Temp3
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
    </Navbar>

        </div>
        </>
    )
}
export default NavBar;