import React, { Component } from "react";
import Search from "../Search/Search.js";
import { NavLink } from "react-router-dom";
import "../../components/Navigation/navigation.css";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Container,
} from "reactstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Navbar color="dark" dark expand="md" className="navigation">
        <Container>
          <NavbarBrand href="/">LA Cinema</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar></Collapse>
          <Search></Search>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
