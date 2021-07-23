import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
} from "reactstrap";
import { URL_POSTER } from "../../const";
import { Link } from "react-router-dom";
import "../../components/Slider/slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.movies.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.movies.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.movies.map((item, value) => {
      const rand = 1 + Math.random() * (1000 - 1);
      const divStyle = {
        backgroundImage: "url(" + URL_POSTER + item.backdrop_path + ")",
      };
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={rand}
        >
          <Link
            to={"/movie/" + item.id}
            style={divStyle}
            className="slider__image"
          >
            <CarouselCaption captionHeader={item.title} />
          </Link>
        </CarouselItem>
      );
    });

    return (
      <Container fluid style={{ padding: 0 }}>
        <Row>
          <Col xs={{ size: 12, offset: 0 }} style={{ padding: 0 }}>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
              className="slider"
            >
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Slider;
