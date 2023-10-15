import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar className="bg-primary">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} style={{ textDecoration: "none",color:"white"}}>
            <i class="fa-solid fa-cloud-arrow-up" style={{marginRight:"10px"}}></i>
            Media Player
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
