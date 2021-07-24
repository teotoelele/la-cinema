import React, { Component } from "react";
import Search from "../Search/Search.js";
import "../../components/Navigation/navigation.css";
import { Navbar, NavbarBrand, Container } from "reactstrap";

class Navigation extends Component {
  render() {
    return (
      <Navbar color="dark" dark expand="md" className="navigation">
        <Container>
          <NavbarBrand href="/">LA Cinema</NavbarBrand>
          <Search></Search>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
