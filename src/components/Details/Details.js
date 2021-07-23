import React, { Component } from "react";
import { URL_COVER, URL_POSTER } from "../../const";
import { Container, Row, Col } from "reactstrap";
import "../../components/Details/details.css";

class Details extends Component {
  render() {
    return (
      <div className="details">
        <Container fluid>
          <Row>
            <Col
              xs={{ size: 12, offset: 0 }}
              style={{ padding: 0, marginBottom: 50 }}
            >
              <img
                src={URL_POSTER + this.props.movie.backdrop_path}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={6} md={5}>
              <img
                src={URL_COVER + this.props.movie.poster_path}
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col sm={6} md={7}>
              <div className="details__content">
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.overview}</p>
                <p>Release Date: {this.props.movie.release_date}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Details;
