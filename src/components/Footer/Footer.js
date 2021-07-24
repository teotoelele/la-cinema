import React, { Component } from "react";
import { Container, Navbar } from "reactstrap";
import "../../components/Footer/footer.css";

class Footer extends Component {
  render() {
    return (
      <Navbar color="dark" dark expand="md" className="footer">
        <Container>
          <p className="desc">
            See <a href="https://github.com/tolend95/la-cinema">Repository</a>
          </p>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
