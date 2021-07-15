import { Component } from "react";
import Section from "./Section";
import { Carousel } from "react-bootstrap";

class CarouselMovie extends Component {
  render() {
    return (
      <Carousel interval={null} indicators={false}>
        <Carousel.Item>
          <Section category={this.props.category} history={this.props.history} location={this.props.location} math={this.props.math} />
        </Carousel.Item>
        <Carousel.Item>
          <Section category={this.props.category} history={this.props.history} location={this.props.location} math={this.props.math}/>
        </Carousel.Item>
        <Carousel.Item>
          <Section category={this.props.category} history={this.props.history} location={this.props.location} math={this.props.math}/>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselMovie;
